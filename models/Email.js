const mongoose = require('mongoose');
const {Schema} = mongoose;

const emailSchema = new Schema({
   
    email: { type: String, required: true, unique: true },
    updated_at: { type: Date }
});
emailSchema.pre("save", function(next) {
  this.updated_at = Date.now();
  next();
});
mongoose.model('Email', emailSchema);