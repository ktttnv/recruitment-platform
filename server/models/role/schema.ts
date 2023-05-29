import { Schema } from 'mongoose';

const permissionSchema = new Schema(
    {
        isAddNewUser: {
            type: Boolean,
            default: false,
        },
        isAddVacancy: {
            type: Boolean,
            default: false,
        },
        canInterview: {
            type: Boolean,
            default: false,
        },
        canUpdatePermissions: {
            type: Boolean,
            default: false,
        },
    },
    { _id: false }
);

const roleSchema = new Schema({
    roleId: {
        type: String,
        enum: ['admin', 'hr', 'employee', 'user'],
    },
    permission: permissionSchema,
});

export default roleSchema;
