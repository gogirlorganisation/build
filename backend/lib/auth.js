module.exports = {
  check: (req, res, next) => {
    if (!req.isAuthenticated()) {
      const err = new Error("Unauthorized");
      err.statusCode = 401;
      err.code = "401_UNAUTHORIZED";
      return next(err);
    }

    return next();
  },
};
