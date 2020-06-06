const { GoogleSpreadsheet } = require("google-spreadsheet");
const { PrismaClient } = require("@prisma/client");
const creds = require("./client_secret.json");
const client = new PrismaClient();

const sheets = {
  // [sheetId]: lessonId
  "1E3DN61IFU-JDfItuys09RWqangRUAnT6namTmJaWjwM": {
    lessonId: 1,
    email: (row) => row._rawData[3],
    score: (row) => parseInt(row._rawData[1].split("/")[0], 10),
  },
  "17-HfvtKhlZN-9u01AZD1cH523e5OzjcjK2jPkZTAZbM": {
    lessonId: 5,
    email: (row) => row._rawData[4],
    score: (row) => parseInt(row._rawData[1].split("/")[0], 10),
  },
};

async function findOrCreateRecord(email, score, lessonId) {
  try {
    // Check if user exists
    const user = await client.user.findOne({
      where: { email },
    });

    if (!user) {
      // Return true here because the row before this may
      // have a registered user
      return true;
    }

    const lesson = await client.lesson.findOne({ where: { id: lessonId } });
    if (!lesson || !lesson.past) {
      return false;
    }

    const uq = await client.userQuiz.findMany({
      where: { lesson: { id: lessonId }, user: { id: user.id } },
    });

    if (uq.length === 0) {
      // Create new record
      const uq_ = await client.userQuiz.create({
        data: {
          lesson: { connect: { id: lessonId } },
          user: { connect: { id: user.id } },
          score,
        },
      });

      // Add points to user
      await client.user.update({
        where: { id: user.id },
        data: { points: user.points + score },
      });

      console.log(
        `${Date.now()} UserQuiz record with id ${uq_.id} created for user ${
          user.id
        } for lesson ${lessonId} with score ${score}`
      );

      return true;
    }

    return false;
  } catch (e) {
    console.error(e);
  }
}

async function diff(sheetId, lessonId, emailFn, scoreFn) {
  try {
    const doc = new GoogleSpreadsheet(sheetId);
    await doc.useServiceAccountAuth(creds);
    await doc.getInfo();

    const rawRows = await doc.sheetsByIndex[0].getRows();

    for (let row of rawRows) {
      if (emailFn(row) && scoreFn(row)) {
        newRecord = await findOrCreateRecord(
          emailFn(row),
          scoreFn(row),
          lessonId
        );
      }
    }

    // 1. Get last row
    // 2. Get score and email from _rawdata
    // 3. Check if score has already been added
    // 4. Add score if not
    // 5. Iterate over rows backward until you find a row which is already in the database
  } catch (e) {
    console.error(e);
  }
}

async function main() {
  const p = [];

  for (let sheetId of Object.keys(sheets)) {
    p.push(
      diff(
        sheetId,
        sheets[sheetId].lessonId,
        sheets[sheetId].email,
        sheets[sheetId].score
      )
    );
  }

  return Promise.all(p);
}

console.log(`\n${Date.now()} Begin script`);
main().then(() => {
  console.log(`${Date.now()} End script\n`);
  process.exit();
});
