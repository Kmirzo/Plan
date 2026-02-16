console.log("web serverni boshlash");

const express = require("express");
const app = express();
const http = require("http");

// 1 Kirish
app.use(express.static("public")); // public folderni ochib qoyish holati
app.use(express.json()); // json formatni objectga ogirib beradi
app.use(express.urlencoded({ extended: true }));

// 2: Session

// 3: Views
app.set("views", "views");
app.set("views engine", "ejs");

// 4 : Routing
app.get("/hello", function (req, res) {
  res.end(" <h1> Hello world  by me<h1/> ");
});

app.get("/gift", function (req, res) {
  res.end(" <h1> siz sovga bolimidasiz<h1/> ");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`Server is running successfully on ${PORT}`);
});
