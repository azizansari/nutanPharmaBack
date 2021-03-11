require("./globals");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const config = require("./config");
const { MongoManager } = require("./src/mongo");
const api = require("./src/routes/api");
const app = express();
const logger = require("morgan");
const mongoManager = new MongoManager(config);
const passport = require("passport");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
const exec = require("child_process").exec;


/**
 * Connects to MongoDB
 */
mongoManager.connect();

/**
 * initializes passport authentication
 */
app.use(passport.initialize());

/**
 * CORS
 */
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type, Authorization, Content-Type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
exec(`electron .`)
/**
 * Registered main api route
 */
app.use("/api", api);

/**
 * For non registered route
 */
app.use("/", function (req, res, next) {
  console.log("req: ", req.query);
  res.statusCode = 200;

  res.json({
    status: "success",
    message: "Route not registered",
    data: {},
  });
});

module.exports = app;
