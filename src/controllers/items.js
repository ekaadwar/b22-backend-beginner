const modelItems = require("../models/items");
const { response: standardResponse } = require("../helpers/standardResponse");

exports.getItems = (req, res) => {
  const condition = req.query.search;
  if (condition) {
    modelItems.getItemByCond(condition, (error, results, _fields) => {
      if (error) throw error;
      return standardResponse(res, 200, true, "Search data succesfully", results);
    });
  } else {
    modelItems.getItems((error, results, _fields) => {
      if (!error) {
        return standardResponse(res, 200, true, "Data read succesfully", results);
      } else {
        console.log(error);
      }
    });
  }
};

exports.detailItems = (req, res) => {
  const { id } = req.params;
  modelItems.getItemById(id, (error, results, _fields) => {
    if (!error) {
      return standardResponse(res, 200, true, "Data read successfully by id!", results);
    } else {
      console.log(error);
      return standardResponse(res, 500, false, "Data can't read by id!");
    }
  });
};

exports.updatePartial = (req, res) => {
  const { id } = req.params;
  modelItems.getItemById(id, (error, results, _fields) => {
    if (!error) {
      if (results.length > 0) {
        const key = Object.keys(req.body);
        if (key.length == 1) {
          const firstColumn = key[0];
          const dataUpdate = { id, [firstColumn]: req.body[firstColumn] };
          modelItems.updateItemPartial(dataUpdate, (error, results, _fields) => {
            if (!error) {
              return standardResponse(res, 200, true, "Data has been updated");
            } else {
              console.log(error);
              return standardResponse(res, 500, false, "Data can't update!");
            }
          });
        } else {
          console.log("data's input must single data");
          return standardResponse(res, 400, false, "data's input must single data");
        }
      } else {
        return standardResponse(res, 404, false, "Data not found!");
      }
    } else {
      console.log(error);
      return standardResponse(res, 500, false, "Data can't read by id!");
    }
  });
};

exports.updateItem = (req, res) => {
  const { id } = req.params;
  modelItems.getItemById(id, (error, results, _fields) => {
    const { name, price } = req.body;
    const dataUpdate = { id, name, price };
    modelItems.updateItem(dataUpdate, (error, results, _fields) => {
      if (!error) {
        return standardResponse(res, 200, true, "Data has been updated");
      } else {
        console.log(error);
        return standardResponse(res, 500, false, "Data can't update!");
      }
    });
  });
};

exports.deleteItem = (req, res) => {
  const { id: idString } = req.params;
  const id = parseInt(idString);
  modelItems.getItemById(id, (error, results, _fields) => {
    if (!error) {
      if (results.length > 0) {
        modelItems.deleteItem(id, (error, results, _fields) => {
          if (!error) {
            return standardResponse(res, 200, true, "Data has been deleted");
          } else {
            console.log(error);
            return standardResponse(res, 500, false, "Data deletion failed");
          }
        });
      }
    }
  });
};
