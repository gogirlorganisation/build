const express = require("express");
const logger = require("morgan");
const session = require("express-session");
const passport = require("passport");
const helmet = require("helmet");
const compression = require("compression");
const redis = require("redis");
const connectRedis = require("connect-redis");
const crypto = require("crypto");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const api = require("./api/index");

const RedisStore = connectRedis(session);
const client = redis.createClient(process.env.REDIS_URL);
const app = express();

// Middleware
app.use(logger("dev"));
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(
  session({
    store: new RedisStore({ client }),
    secret: process.env.SECRET || crypto.randomBytes(20).toString("hex"),
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
    },
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", api);

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    console.log(err);
  }

  // Set statusCode to 500 if it isn't already there
  err.statusCode = err.statusCode || 500;
  err.message = err.message || err.name || "Internal Server Error";
  err.code = err.code || err.name || "500_INTERNAL_SERVER_ERR";

  res.locals.authenticated = req.isAuthenticated() || false;
  res.locals.user = req.user;
  res.json({ success: false, code: err.statusCode, message: err.message });
  return;
});

module.exports = app;
