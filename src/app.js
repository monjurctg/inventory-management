const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const GloovalError = require("./middlewares/GloovalError");
const userRoute = require("./routes/v1/user-route");
const brandRoute = require("./routes/v1/brand-route");

// global middile ware
app.use(express.json());
app.use(cors({origin: "*"}));
app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
  console.log("hello");
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
// user route
app.use("/api/v1/users", userRoute);
app.use("/api/v1/brands", brandRoute);

// handling all (get,post,update,delete.....) unhandled routes
app.all("/*", (req, res, next) => {
  res.statusCode = 404;
  next(new Error(`Can't find ${req.originalUrl} on the server`, 404));
});

app.use(GloovalError);

// error handling middleware

module.exports = app;
