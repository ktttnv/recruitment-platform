import mongoose from 'mongoose';

import User from './user';
import Vacancy from './vacancy';

import ObjectId = mongoose.Types.ObjectId;

type ITemplates = {
    _id?: mongoose.Types.ObjectId;
    _user: ObjectId | User;
    _vacancy?: ObjectId | Vacancy;
    date: Date,
    text: String,
    type: 'default' | 'email' | 'searching' | 'offer' | 'denied';
};

export type Template = ITemplates;
export default Template;
