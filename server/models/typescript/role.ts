import mongoose from 'mongoose';

export type Role = IRole;

export default Role;

type Permission = {
    isAddNewUser?: boolean;
    isAddVacancy?: boolean;
    canInterview?: boolean;
    canUpdatePermissions?: boolean;
};

type IRole = {
    _id?: mongoose.Types.ObjectId;
    roleId: 'admin' | 'hr' | 'employee' | 'user';
    permission: Permission;
};
