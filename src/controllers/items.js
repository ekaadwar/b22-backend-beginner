const modelItems = require("../models/items");
const { response: standardResponse } = require("../helpers/standardResponse");

exports.insertItems = (req, res) => {
  const { name, price, categoryId } = req.body;
  const dataInsert = { name, price, categoryId };
  modelItems.insertItems(dataInsert, (error, results, _fields) => {
    if (!error) {
      return standardResponse(res, 200, true, "Data has been inserted succesfully!");
    } else {
      return standardResponse(res, 500, false, "Data insertion has failed!");
    }
  });
};

exports.getItems = (req, res) => {
  const condition = req.query.search;
  const sort = req.query.sort;
  if (condition) {
    if (sort) {
      const dataColumn = Object.keys(req.body);
      const column = dataColumn[0];
      modelItems.getItemByCondNSort(condition, sort, column, (error, results, _fields) => {
        if (!error) {
          return standardResponse(res, 200, true, "Data read succesfully", results);
        } else {
          return standardResponse(res, 500, false, "Data read has failed!");
        }
      });
    } else {
      modelItems.getItemByCond(condition, (error, results, _fields) => {
        if (error) throw error;
        return standardResponse(res, 200, true, "Search data succesfully", results);
      });
    }
  } else {
    if (sort) {
      const dataColumn = Object.keys(req.body);
      const column = dataColumn[0];
      modelItems.getItemsSort(sort, column, (error, results, _fields) => {
        if (!error) {
          return standardResponse(res, 200, true, "Data read succesfully", results);
        } else {
          return standardResponse(res, 500, false, "Data read has failed!");
        }
      });
    } else {
      modelItems.getItems((error, results, _fields) => {
        if (!error) {
          return standardResponse(res, 200, true, "Data read succesfully", results);
        } else {
          return standardResponse(res, 500, false, "Data read has failed!");
        }
      });
    }
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
