const auth = require("./auth.middleware");
const permission = require("./permission.middleware");
const session = require("./session.middleware");
module.exports = {
  auth,
  permission,
  session,
};
