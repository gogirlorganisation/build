const { PrismaClient } = require("@prisma/client");
const client = new PrismaClient();

async function main() {
  try {
    const uqRows = await client.userQuiz.findMany();

    for (row of uqRows) {
      const userRows = uqRows.filter(
        (uq) => uq.userId === row.userId && uq.lessonId === row.lessonId
      );

      if (userRows.length > 1) {
        console.log(
          `\n${Date.now()} Duplicate records found for user#${
            row.userId
          } with ids ${userRows.map((u) => u.id)}`
        );
      }
    }
  } catch (e) {
    console.error(e);
  }
}

console.log(`\n${Date.now()} Begin script`);
main().then(() => {
  console.log(`${Date.now()} End script\n`);
  process.exit();
});
