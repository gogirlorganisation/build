const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "test",
  });
});

router.use("/auth", require("./auth"));
router.use("/u", require("./user"));

router.get("*", (req, res, next) => {
  const e = new Error("Not found");
  e.statusCode = 404;
  next(e);
});

module.exports = router;
