exports.response = (res, status = 200, success = true, message = "This a message", results) => {
  res.status(status).json({
    success,
    message,
    results,
  });
};
