import mongoose from 'mongoose';

import User from '../../models/typescript/user';
import UserModel from '../../models/user';
import * as PasswordApi from './password-api';

import ObjectId = mongoose.Types.ObjectId;

export async function add(user: User) {
    try {
        const updatedUser = user;
        updatedUser.password = await PasswordApi.hashPassword(user.password);

        const newUser = new UserModel(updatedUser);

        return newUser.save();
    } catch (error) {
        console.log(`Error occured during calling add user, error: ${error}`);
        throw error;
    }
}

export async function login(email: string, password: string) {
    try {
        const user = await UserModel.find({ email: email });

        return PasswordApi.validatePassword(password, user[0].password);
    } catch (error) {
        console.log(`Error occured during calling login function, error: ${error}`);
        throw error;
    }
}

export async function update(userId: string, user: User) {
    try {
        const id = new ObjectId(userId);

        return UserModel.findOneAndUpdate(
            { _id: id },
            {
                $set: user,
            }
        );
    } catch (error) {
        console.log(`Error occured during updatinh user function, error: ${error}`);
        throw error;
    }
}

export async function getAll() {
    return UserModel.find();
}

export async function getById(userId: string) {
    const id = new ObjectId(userId);

    return UserModel.find({ _id: id });
}

export async function updateById(userId: string, updatedUser: User) {
    try {
        const id = new ObjectId(userId);

        return UserModel.findOneAndUpdate(
            { _id: id },
            {
                $set: updatedUser,
            }
        );
    } catch (error) {
        console.log(`Error occured during updating user function, error: ${error}`);
        throw error;
    }
}
