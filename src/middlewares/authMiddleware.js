const jwt = require("../lib/jwt");
// TODO const { SECRET_KEY } = require("../config/config");
const SECRET_KEY = "e370a2aa-443e-4aaf-ba24-a90eac90637c"

exports.auth = async (req, res, next) => {
  const token = req.cookies['token'];
  if (token) {
    try {
      const decodetToken = await jwt.verify(token, SECRET_KEY);
      req.user = decodetToken;
      next();
    } catch (err) {
      res.clearCookie('token');
      res.redirect("/users/login");
    }
  } else {
    next();
  }
};
