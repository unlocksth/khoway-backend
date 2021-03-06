/* start generator api */
const routes = require("./generator");
router
  .get("/routings", routes.index)
  .get("/routing/:id", routes.show)
  .get("/routing", routes.showBy)
  .post("/routing", routes.create)
  .post("/routing/:id", routes.update)
  .delete("/routing/:id", routes.delete)
  .delete("/routings", routes.deleteAll);
/* end generator api */
