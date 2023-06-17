const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const { auth } = require("./middlewares/authMiddleware");

const routes = require("./routes");

const app = express();

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "src/views");

//TODO change db name
mongoose
  .connect("mongodb://localhost:27017/petstagram")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log("DB Error", err));

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);

app.use(routes);

app.listen( 5010, () => {
  console.log("Example app listening on http://localhost:5010!");
});
