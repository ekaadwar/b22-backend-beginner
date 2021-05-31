const modelItems = require("../models/items");

exports.getItems = (req, res) => {
  modelItems.getItems((error, results, _fields) => {
    if (!error) {
      return res.status(200).json({
        success: true,
        message: "Data read succesfully",
        results,
      });
    } else {
      console.log(error);
    }
  });
};

exports.detailItems = (req, res) => {
  const { id } = req.params;
  modelItems.getItemById(id, (error, results, _fields) => {
    if (!error) {
      return res.status(200).json({
        success: true,
        message: "Data read successfully by id!",
        results,
      });
    } else {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Data can't read by id!",
      });
    }
  });
};

exports.insertItems = (req, res) => {
  const { name, price } = req.body;
  const data = { name, price };
  modelItems.insertItems(data, (error, results, _fields) => {
    if (!error) {
      return res.status(200).json({
        success: true,
        message: "Item has been inserted",
      });
    } else {
      console.log(error);
      return res.json({
        success: false,
        message: "Data failed to insert",
      });
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
              return res.status(200).json({
                success: true,
                message: "Data has been updated",
              });
            } else {
              console.log(error);
              return res.status(500).json({
                success: false,
                message: "Data can't update!",
              });
            }
          });
        } else {
          console.log("data's input must single data");
          return res.status(400).json({
            success: false,
            message: "data's input must single data",
          });
        }
      } else {
        return res.status(404).json({
          success: false,
          message: "Data not found!",
        });
      }
    } else {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Data can't read by id!",
      });
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
        return res.status(200).json({
          success: true,
          message: "Data has been updated",
        });
      } else {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Data can't update!",
        });
      }
    });
  });
};
