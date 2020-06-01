const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { check } = require("../lib/auth");

const client = new PrismaClient();

router.use(check);

router.get("/badges", async (req, res, next) => {
  try {
    const badges = await client.user
      .findOne({ where: { id: req.user.id } })
      .badges();

    res.json({
      success: true,
      message: `${badges.length} badges found`,
      badges,
    });
  } catch (e) {
    e.statusCode = 500;
    next(e);
  }
});

router.get("/leaderboard", async (req, res, next) => {
  try {
    const users = await client.user.findMany({
      where: { name: { not: null } },
      orderBy: { points: "desc" },
      select: { name: true, points: true },
    });

    res.json({
      success: true,
      message: `${users.length} users found`,
      users,
    });
  } catch (e) {
    e.statusCode = 500;
    next(e);
  }
});

module.exports = router;
