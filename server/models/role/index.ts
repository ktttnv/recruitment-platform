import mongoose from 'mongoose';

import roleSchema from './schema';
import { Role } from '../typescript/role';

const RoleModel = mongoose.model<Role>('Role', roleSchema);

export default RoleModel;
