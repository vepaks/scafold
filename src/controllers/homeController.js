const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/404", (req, res) => {
  res.render("404");
})


module.exports = router;
