const mongoose = require('mongoose');
const {Schema} = mongoose;

const responseSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    form: { type: Schema.Types.ObjectId, ref: 'Form', required: true },
    updated_at: { type: Date }
});
responseSchema.pre("save", function(next) {
  this.updated_at = Date.now();
  next();
});

mongoose.model('Response', responseSchema);