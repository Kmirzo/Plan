console.log("web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");

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
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/", function (req, res) {
  res.render("main");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`Server is running successfully on ${PORT}`);
});
