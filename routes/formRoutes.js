const requireLogin = require("../middlewares/requireLogin");
var form_controller = require("../controllers/formController");

module.exports = app => {
  app.post("/forms/create", requireLogin, form_controller.create_form);
  app.get("/forms/get", form_controller.get_form);
  app.post("/forms/respond", form_controller.submit_response);
  app.get("/forms/responses", form_controller.fetch_responses);
  app.get("/forms/all", form_controller.fetch_forms);

};
 