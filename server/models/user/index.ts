import mongoose from 'mongoose';

import userSchema from './schema';
import { User } from '../typescript/user';

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;
