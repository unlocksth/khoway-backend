let config = require("./config/index");
/**
  In terminal open mysql and create a new database. Then include the name of
  the database and your username and password in the development details below.
  Run the following terminal command
  $ mysql
  ## CREATE DATABASE DB_NAME;
  Note: remember the semicolon syntax
  ## \q
*/
module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      port: 3306,
      user: "root",
      database: "kho_backend_uat",
      password: null,
    },
    migrations: {
      directory: __dirname + "/database/mysqldb/migrations",
    },
    seeds: {
      directory: __dirname + "/database/mysqldb/seeds/development",
    },
  },
  production: {
    client: "mysql",
    connection: {
      host: config.MYSQL.HOST,
      port: config.MYSQL.PORT,
      user: config.MYSQL.USER,
      database: config.MYSQL.DB,
      password: config.MYSQL.PW,
      ssl: true,
    },
    migrations: {
      directory: __dirname + "/database/mysqldb/migrations",
    },
    seeds: {
      directory: __dirname + "/database/mysqldb/seeds/production",
    },
  },
};
