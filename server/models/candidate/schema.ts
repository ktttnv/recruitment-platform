import mongoose, { Schema } from 'mongoose';

import ObjectId = mongoose.Types.ObjectId;

const socialNetworkSchema = new Schema(
    {
        link: String,
        type: {
            type: String,
            enum: ['linkedin', 'vk', 'telegram', 'hh', 'email'],
            default: 'linkedin',
        },
        isMain: Boolean,
    },
    { _id: false }
);

const statusSchema = new Schema(
    {
        date: Date,
        type: {
            type: String,
            enum: ['not_search', 'active_serach', 'slow_search'],
        },
    },
    { _id: false }
);

const lastActionSchema = new Schema(
    {
		date: Date,
		status: {
			type: String,
			enum: ['find', 'talk', 'interview', 'hiring', 'black_list'],
			default: 'opened',
		},
	},
    { _id: false }
);

const candidateSchema = new Schema({
    name: String,
    surname: String,
    patronymic: String,
    email: String,
    photo: String,
    specialization: String,
    startCareerDate: Date,
    _skills: [
        {
            type: ObjectId,
            ref: 'Skill',
        },
    ],
    cvExt: String,
    lastAction: lastActionSchema,
    socialNetworks: [socialNetworkSchema],
    status: statusSchema,
    _user: {
        type: ObjectId,
        ref: 'User',
    },
});

export default candidateSchema;
