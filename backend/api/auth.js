const router = require("express").Router();
const passport = require("passport");

router.post("/login", (req, res, next) =>
  passport.authenticate("local", (error, user, info) => {
    if (error) {
      const e = new Error();
      e.message = error;
      e.statusCode = 401;
      return next(e);
    }

    if (user) {
      return req.logIn(user, err => {
        if (err) {
          const err_ = new Error();
          err_.message = err;
          err_.statusCode = 401;
          return next(err_);
        }

        return res.status(200).json({
          success: true,
          message: "User authenticated",
          user,
        });
      });
    }

    const err = new Error(info.message);
    err.statusCode = 401;
    err.code = "401_AUTH_FAILURE";
    return next(err);
  })(req, res, next)
);

router.all("/me", (req, res) =>
  res.status(200).json({ authenticated: req.isAuthenticated(), user: req.user })
);

module.exports = router;
