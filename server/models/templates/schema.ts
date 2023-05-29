import mongoose, { Schema } from 'mongoose';

const templateSchema = new Schema({
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    _vacancy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vacancy',
    },
    text: String,
    date: {
        type: Date,
        default: Date.now,
    },
    type: {
        type: String,
        enum: ['default', 'email', 'searching', 'offer', 'denied'],
        default: 'default',
    },
});

export default templateSchema;
