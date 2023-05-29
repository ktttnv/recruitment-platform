import mongoose, { Schema } from 'mongoose';

const taskSchema = new Schema({
    text: String,
    isDone: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

export default taskSchema;
