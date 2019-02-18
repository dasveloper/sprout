const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String,
    forms: [{ type: Schema.Types.ObjectId, ref: 'Form' }]
});

mongoose.model('User', userSchema);