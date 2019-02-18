const mongoose = require('mongoose');
const {Schema} = mongoose;

const responseSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    form: { type: Schema.Types.ObjectId, ref: 'Form' }
});

mongoose.model('Response', responseSchema);