import mongoose, { Schema } from 'mongoose';

import ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new Schema({
    name: String,
    surname: String,
    patronymic: String,
    photo: String,
    email: String,
    password: String,
    role: {
        type: ObjectId,
        ref: 'Role',
    },
});

export default userSchema;
