const router = require("express").Router();
const passport = require("passport");
const yup = require("yup");
const { PrismaClient } = require("@prisma/client");
const { against } = require("../lib/validation");
const { check } = require("../lib/auth");

const client = new PrismaClient();

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

router.post(
  "/initial",
  against(yup.object().shape({ name: yup.string().required() })),
  check,
  async (req, res, next) => {
    try {
      const user = await client.user.update({
        where: {
          id: req.user.id,
        },
        data: { name: req.body.name },
      });

      res.json({
        success: true,
        message: "Name updated",
      });
    } catch (e) {
      e.statusCode = 500;
      next(e);
    }
  }
);

router.post("/logout", (req, res) => {
  req.logOut();
  res.json({
    success: true,
    message: "Logged out",
  });
});

router.post("/me", (req, res) =>
  res.status(200).json({ authenticated: req.isAuthenticated(), user: req.user })
);

module.exports = router;
