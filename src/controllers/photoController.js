const router = require("express").Router();
const photoManager = require("../managers/photoManager");
const { errorHelper } = require("../utils/errorHelpers");


// render catalog(photo list) page
router.get("/",  async (req, res) => {
  const photos = await photoManager.getAll();
  res.render('photo/catalog', { photos })

});

//render photo create page
router.get("/create", (req, res) => {
  res.render("photo/create");
});

router.post("/create", async (req, res) => {
  // req.body is the data from the form
  const photoData =
    {
      // ...req.body is the same as title: req.body.title, description: req.body.description, etc.
    ...req.body,
      // Owner is the user id
      owner: req.user._id,
    }
  try {
    await photoManager.create(photoData);
    res.redirect("/");
  } catch (err) {
      res.render ("photo/create", { error: errorHelper(err) });
  }
});

module.exports = router;
