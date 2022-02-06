const modelUsers = require("../models/users");
const { response: standardResponse } = require("../helpers/standardResponse");

exports.getUsers = (req, res) => {
  modelUsers.getUsers((error, results, _fields) => {
    if (!error) {
      return standardResponse(res, 200, true, "List of Users", results);
    } else {
      console.log(error);
      return standardResponse(res, 404, false, error);
    }
  });
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  modelUsers.getUserById(id, (error, results, _fields) => {
    if (!error) {
      modelUsers.countData(id, (errorCount, resultCount, _fields) => {
        if (!errorCount) {
          const totalData = Object.values(resultCount[0])[0];
          if (totalData > 0) {
            standardResponse(res, 200, true, `User's Data`, results[0]);
          } else {
            standardResponse(res, 404, false, "Data not found");
          }
        } else {
          console.log(error);
          standardResponse(res, 500, false, `an error occured : ${error}`);
        }
      });
    } else {
      standardResponse(res, 500, false, `an error occured : ${error}`);
    }
  });
};

exports.addUser = (req, res) => {
  const data = req.body;
  modelUsers.addUser(data, (error, _results, _fields) => {
    if (!error) {
      return standardResponse(res, 200, true, "User has been added");
    } else {
      console.log(error);
      return standardResponse(res, 500, false, error);
    }
  });
};

exports.updateUser = (req, res) => {
  const { id: idString } = req.params;
  const id = parseInt(idString);
  const data = req.body;

  modelUsers.getUserById(id, (error, results, _fields) => {
    if (!error) {
      modelUsers.countData(id, (errorCount, resultCount, _fields) => {
        if (!errorCount) {
          const totalData = Object.values(resultCount[0])[0];
          if (totalData > 0) {
            modelUsers.updateUser(
              id,
              data,
              (errorUpdate, _resultUpdate, _fields) => {
                if (!errorUpdate) {
                  return standardResponse(
                    res,
                    200,
                    true,
                    "Data has been inserted succesfully!"
                  );
                } else {
                  return standardResponse(
                    res,
                    500,
                    false,
                    `data failed to update. Error : ${error}`
                  );
                }
              }
            );
          } else {
            return standardResponse(res, 404, false, "Data not found");
          }
        } else {
          console.log(error);
          return standardResponse(
            res,
            500,
            false,
            `an error occured : ${error}`
          );
        }
      });
    } else {
      return standardResponse(res, 500, false, `an error occured : ${error}`);
    }
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  modelUsers.getUserById(id, (error, results, _fields) => {
    if (!error) {
      modelUsers.countData(id, (errorCount, resultCount, _fields) => {
        if (!errorCount) {
          const totalData = Object.values(resultCount[0])[0];
          if (totalData > 0) {
            modelUsers.deleteUser(id, (error, _resultDelete, _fieldDelete) => {
              if (!error) {
                return standardResponse(res, 200, true, `Data has been delete`);
              } else {
                return standardResponse(
                  res,
                  500,
                  false,
                  `data failed to delete : ${error}`
                );
              }
            });
          } else {
            return standardResponse(res, 404, false, "Data not found");
          }
        } else {
          console.log(error);
          return standardResponse(
            res,
            500,
            false,
            `an error occured : ${error}`
          );
        }
      });
    } else {
      return standardResponse(res, 500, false, `an error occured : ${error}`);
    }
  });
};
