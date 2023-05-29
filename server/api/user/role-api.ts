import mongoose from 'mongoose';

import Role from '../../models/typescript/role';
import RoleModel from '../../models/role';

import ObjectId = mongoose.Types.ObjectId;

export async function add(role: Role) {
    try {
        const newRole = new RoleModel(role);

        return newRole.save();
    } catch (error) {
        console.log(`Error occured during calling add role, error: ${error}`);
        throw error;
    }
}

export async function updateById(roleId: string, role: Role) {
    try {
        const id = new ObjectId(roleId);

        return RoleModel.findOneAndUpdate(
            { _id: id },
            {
                $set: role,
            }
        );
    } catch (error) {
        console.log(`Error occured during updating role function, error: ${error}`);
        throw error;
    }
}
