const { errorHelper } = require("../utils/errorHelpers");

// TODO change name of this function
exports.errorHandler = (err, req, res) => {
  res.render("/404", { error: errorHelper(err) });
};
