import mongoose from 'mongoose';

import User from './user';

import ObjectId = mongoose.Types.ObjectId;

type ITask = {
    _id?: mongoose.Types.ObjectId;
    text: String,
    isDone: Boolean,
    date: Date,
    _user: ObjectId | User;
};

export type Task = ITask;
export default Task;
