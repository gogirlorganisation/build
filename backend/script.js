const { PrismaClient } = require("@prisma/client");
const client = new PrismaClient();

async function main() {
    console.log(await client.lesson.create({
        data: {
            title: "Lesson track 3",
            track: "Track 3",
            date: new Date("2021-01-09"),
            materials: "a",
            hindiVideo: "b", 
            englishVideo: "c"
        }
    }))

}

main();