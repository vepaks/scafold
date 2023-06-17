const jwt = require("../lib/jwt");
// TODO const { SECRET_KEY } = require("../config/config");
const SECRET_KEY = "e370a2aa-443e-4aaf-ba24-a90eac90637c";

exports.auth = async (req, res, next) => {
  const token = req.cookies["token"];
  if (token) {
    try {
      const decodedToken = await jwt.verify(token, SECRET_KEY);

      req.user = decodedToken;
      res.locals.user = decodedToken;
      res.locals.isAuthenticated = true;

      next();
    } catch (err) {
      res.clearCookie("token");
      res.redirect("/users/login");
    }
  } else {
    next();
  }
};

exports.isAuth = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/users/login");
  }
}