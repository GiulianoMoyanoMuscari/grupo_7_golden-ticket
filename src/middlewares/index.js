const auth = require("./auth.middleware");
const multer = require("./multer.middleware");
const permission = require("./permission.middleware");
const session = require("./session.middleware");
const validate = require("./validations.middleware");
module.exports = {
  auth,
  multer,
  permission,
  session,
  validate,
};
