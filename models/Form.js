const mongoose = require("mongoose");
const { Schema } = mongoose;

const formSchema = new Schema({
  listName: { type: String, required: true },
  showEmail: { type: Boolean, required: true },
  showPhone: { type: Boolean, required: true },
  showAddress: { type: Boolean, required: true },
  creator: { type: Schema.Types.ObjectId, ref: "User",required: true },
  creatorName:{ type: String, required: true },
  responses: [{ type: Schema.Types.ObjectId, ref: "Response" }],
  updated_at: { type: Date }
});
formSchema.pre("save", function(next) {
  this.updated_at = Date.now();
  next();
});
mongoose.model("Form", formSchema);
