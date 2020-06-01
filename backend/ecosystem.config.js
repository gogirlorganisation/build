module.exports = {
  apps: [
    {
      name: "app",
      script: "./bin/serve",
      env: {
        NODE_ENV: "production",
        PORT: "43566",
        SECRET:
          "66c8d13db29e97f6a6e727766d41836e5ffaae7cb18102f50096fad7d194f536eb7621bebe988da0",
        MYSQL_URL:
          "mysql://thegirlcode:TheGirlCodegg@010620@localhost:3306/build",
      },
    },
    {
      name: "update",
      script: "./update.js",
      cron_restart: "*/20 * * * *",
      autorestart: false,
      env: {
        MYSQL_URL:
          "mysql://thegirlcode:TheGirlCodegg@010620@localhost:3306/build",
      },
    },
  ],
};
