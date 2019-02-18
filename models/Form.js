const mongoose = require('mongoose');
const {Schema} = mongoose;

const formSchema = new Schema({
    name: String,
    showEmail: Boolean,
    showPhone: Boolean,
    showAddress: Boolean,
    showName: Boolean,
    reason: String,
    isPlural: Boolean,
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    responses: [{ type: Schema.Types.ObjectId, ref: 'Response' }]

});

mongoose.model('Form', formSchema);