module.exports = {
  against: schema => (req, res, next) => {
    if (schema.isValid(req.body)) {
      return next();
    }

    const e = new Error("Invalid data");
    e.statusCode = 400;
    next(e);
  },
};
