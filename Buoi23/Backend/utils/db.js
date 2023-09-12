const connectDB = async function () {
  const { Sequelize } = require("sequelize");
  const { DB_HOST, DB_PASS, DB_NAME, DB_PORT, DB_USER, DB_DRIVER } = process.env;

  console.log(DB_HOST, DB_PASS, DB_NAME, DB_PORT, DB_USER, DB_DRIVER);
  const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: DB_DRIVER,
    port: DB_PORT,
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return sequelize;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDB();
