import mongoose from 'mongoose';
import Role from './role';

import ObjectId = mongoose.Types.ObjectId;

export type User = IUser;

export default User;

type IUser = {
    _id?: mongoose.Types.ObjectId;
    name: string;
    surname: string;
    patronymic: string;
    photo?: string;
    email: string;
    password: string;
    role: ObjectId | Role;
};
