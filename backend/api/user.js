const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { check } = require("../lib/auth");

const client = new PrismaClient();

router.get("/badges", check, async (req, res, next) => {
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
    const uq = await client.userQuiz.findMany();

    const users = (
      await client.user.findMany({
        where: { name: { not: null } },
        select: { name: true, id: true },
      })
    )
      .map((u) => ({
        ...u,
        points: uq
          .filter((uq_) => uq_.userId === u.id)
          .reduce((p, c) => p + c.score, 0),
      }))
      .sort((a, b) => b.points - a.points);

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
