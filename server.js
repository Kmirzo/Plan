const http = require("http");
const app = require("./app");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://Kamron:TlXXgvnA8WtsmCzd@atlascluster.cxj1w20.mongodb.net/Plan";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDb connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3007;
      server.listen(PORT, function () {
        console.log(
          `The server is successfully running on port:, ${PORT}, http://localhost:${PORT} `
        );
      });
    }
  }
);
