const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    forms: [{ type: Schema.Types.ObjectId, ref: 'Form' }],
    updated_at: { type: Date },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});
userSchema.pre("save", function(next) {
  this.updated_at = Date.now();
  next();
});
mongoose.model('User', userSchema);