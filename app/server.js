const express = require("express");

const app = express();

const VERSION = process.env.APP_VERSION || "local";

app.get("/", (req, res) => {
  res.send("DevSecOps Pipeline Running Successfully");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

app.get("/version", (req, res) => {
  res.status(200).json({
    version: VERSION
  });
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}
