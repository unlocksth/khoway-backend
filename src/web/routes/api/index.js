const express = require("express");
const router = express.Router();

// api routing
const dev = require("./develop");

// setup routing
const cities = require("./city");
const townships = require("./township");

// user routing
const users = require("./user");
const registers = require("./register");
const userRoles = require("./user_role");
const userRegisters = require("./user_register");

module.exports = router;

// working with json
router.get("/user-roles", userRoles.index);

router.post("/sign-up", registers.create);
router.post("/sign-in", registers.login);
router.get("/chart-data", registers.getChartData);

router
  .get("/users", users.index)
  .get("/user/:id", users.show)
  .post("/user", users.create)
  .post("/user/:id", users.updateWithPass)
  .post("/user-no-pass/:id", users.updateWithoutPass)
  .delete("/user/:id", users.delete);

router
  .get("/townships", townships.index)
  .get("/township/:id", townships.show)
  .get("/township", townships.showBy)
  .post("/township", townships.create)
  .post("/township/:id", townships.update)
  .delete("/township/:id", townships.delete)
  .delete("/students", townships.deleteAll);

router
  .get("/cities", cities.index)
  .get("/city/:id", cities.show)
  .get("/city", cities.showBy)
  .post("/city", cities.create)
  .post("/city/:id", cities.update)
  .delete("/city/:id", cities.delete)
  .delete("/cities", cities.deleteAll);

router
  .get("/registers", userRegisters.index)
  .get("/register/:id", userRegisters.show)
  .get("/register", userRegisters.showBy)
  .post("/register", userRegisters.create)
  .post("/register/:id", userRegisters.update)
  .delete("/register/:id", userRegisters.delete)
  .delete("/registers", userRegisters.deleteAll);

/* start chat_room api */
const chatRooms = require("./chat_room");
router
  .get("/chat_rooms", chatRooms.index)
  .get("/chat_room/:id", chatRooms.show)
  .get("/chat_room", chatRooms.showBy)
  .post("/chat_room", chatRooms.create)
  .post("/chat_room/:id", chatRooms.update)
  .delete("/chat_room/:id", chatRooms.delete)
  .delete("/chat_rooms", chatRooms.deleteAll);
/* end chat_room api */

/* start chat_messages api */
const chatMessages = require("./chat_message");
router
  .get("/chat_messagess", chatMessages.index)
  .get("/chat_messages/:id", chatMessages.show)
  .get("/chat_messages", chatMessages.showBy)
  .post("/chat_messages", chatMessages.create)
  .post("/chat_messages/:id", chatMessages.update)
  .delete("/chat_messages/:id", chatMessages.delete)
  .delete("/chat_messagess", chatMessages.deleteAll);
/* end chat_messages api */
