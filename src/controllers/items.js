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
