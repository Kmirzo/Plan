console.log("web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

// Connect to MongoDB

// 1 Kirish
app.use(express.static("public")); // public folderni ochib qoyish holati
app.use(express.json()); // json formatni objectga ogirib beradi
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: Views code
app.set("views", "views"); // res.renderdagi faylni shu papkalar ichidan search qilsin
app.set("view engine", "ejs");

// 4 : Routing code
app.post("/create-item", (req, res) => {
  // DB
});

app.get("/", function (req, res) {
  res.render("main");
});

module.exports = app;
