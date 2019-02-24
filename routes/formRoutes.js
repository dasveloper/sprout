const requireLogin = require("../middlewares/requireLogin");
const isListOwner = require("../middlewares/isListOwner");

var form_controller = require("../controllers/formController");

module.exports = app => {
  app.post("/forms/create", requireLogin, form_controller.create_form);
  app.post("/forms/delete", requireLogin, form_controller.delete_form);

  app.get("/forms/get", form_controller.get_form);
  app.post("/forms/respond", form_controller.submit_response);
  app.get("/forms/responses", requireLogin, isListOwner, form_controller.fetch_responses);
  app.get("/forms/all", requireLogin, form_controller.fetch_forms);

};
 