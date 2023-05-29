import mongoose from 'mongoose';

import User from './user';
import Vacancy from './vacancy';
import Candidate from './candidate';

import ObjectId = mongoose.Types.ObjectId;

type IComment = {
    _id?: mongoose.Types.ObjectId;
    _user: ObjectId | User;
    _candidate?: ObjectId | Candidate;
    _vacancy?: ObjectId | Vacancy;
    text: String,
    date: Date,
};

export type Comment = IComment;
export default Comment;
