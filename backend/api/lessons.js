const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { check } = require("../lib/auth");
const client = new PrismaClient();

router.use(check);

router.get("/s", async (req, res, next) => {
  try {
    const upcoming = await client.lesson.findMany({
      where: {
        past: false,
      },
      orderBy: {
        date: "asc",
      },
      first: 1,
    });

    const attendance = await client.attendance.findMany({
      where: { userId: req.user.id },
    });

    const quizzes = await client.userQuiz.findMany({
      where: { userId: req.user.id },
    });

    const past = (
      await client.lesson.findMany({
        where: {
          past: true,
        },
        orderBy: {
          date: "desc",
        },
      })
    ).map((p) => {
      const a = attendance.find((a_) => a_.lessonId === p.id);
      const q = quizzes.find((q_) => q_.lessonId === p.id);

      return {
        ...p,
        attendance: a?.present || false,
        quizAttempted: !!q,
        quizScore: q?.score || 0,
      };
    });

    res.json({ success: true, message: "Lessons retreived", upcoming, past });
  } catch (e) {
    e.statusCode = 500;
    next(e);
  }
});

router.post("/:id/attendance", async (req, res, next) => {
  try {
    const attendance = await client.attendance.create({
      data: {
        lesson: { connect: { id: parseInt(req.params.id, 10) } },
        user: { connect: { id: req.user.id } },
      },
    });

    res.json({ success: true, message: "Attendance marked" });
  } catch (e) {
    e.statusCode = 500;
    next(e);
  }
});

module.exports = router;
