const passport = require("passport");
const bcrypt = require("bcrypt");
const { Strategy: LocalStrategy } = require("passport-local");
const { PrismaClient } = require("@prisma/client");
// Replace with spreadsheet
const emails = require("../emails.json");

const client = new PrismaClient();

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      const user = await client.user.findOne({
        where: { email },
      });

      if (user) {
        if (await bcrypt.compare(password, user.password)) {
          return done(null, user);
        }

        return done("Incorrect password");
      } else {
        if (emails.indexOf(email) === -1) {
          return done("This email is not associated to a build participant");
        }

        const user_ = await client.user.create({
          data: { email, password: await bcrypt.hash(password, 14) },
        });

        // Add donr badge
        await client.badge.create({
          data: {
            User: { connect: { id: user_.id } },
            img: "https://i.imgur.com/8DmfRD8.png",
          },
        });

        return done(null, user_);
      }
    }
  )
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((token, done) =>
  client.user
    .findOne({ where: { id: token } })
    .then((u) => (u ? done(null, u) : done("User not found")))
    .catch(done)
);
