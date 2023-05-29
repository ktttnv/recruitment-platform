import mongoose, { Schema } from 'mongoose';

const commentSchema = new Schema({
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    _candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Candidate',
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
});

export default commentSchema;
