console.log("web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

// Connect to MongoDB
const db = require("./server").db();

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
  console.log("User entered /create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(rerr);
      res.end("smth went wrong");
    } else {
      res.end("successfully added");
    }
  });
  // DB
});

app.get("/", function (req, res) {
  console.log("User entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("smth went wrong");
      } else {
        res.render("main", { items: data });
      }
    });
});

module.exports = app;
