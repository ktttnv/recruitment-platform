import mongoose, { Schema } from 'mongoose';

const salarySettingsSchema = new Schema(
    {
        from: Number,
        to: Number,
    },
    { _id: false }
);

const vacancySchema = new Schema(
    {
        title: String,
        description: String,
        url: [String],
        location: {
            type: String,
            enum: ['office', 'remote', 'office/remote'],
            default: 'office',
        },
        salary: salarySettingsSchema,
        status: {
            type: String,
            enum: ['opened', 'preparation', 'search', 'interview', 'hiring', 'on_hold', 'closed'],
            default: 'opened',
        },
        createdDate: {
            type: Date,
            default: Date.now,
        },
        deadlineDate: Date,
        _skills: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Skill',
            },
        ],
        // TODO nanov94: teams:
        // TODO nanov94: users who work with this vacancy
    },
    { _id: true }
);

export default vacancySchema;
