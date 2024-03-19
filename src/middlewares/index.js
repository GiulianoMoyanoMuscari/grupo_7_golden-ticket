const auth = require("./auth.middleware");
const permission = require("./permission.middleware");
const session = require("./session.middleware");
const multer = require("./multer.middleware");
module.exports = {
  auth,
  permission,
  session,
  multer,
};
