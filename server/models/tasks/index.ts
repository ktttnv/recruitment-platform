import mongoose from 'mongoose';

import taskSchema from './schema';
import { Task } from '../typescript/task';

const TaskModel = mongoose.model<Task>('Task', taskSchema);

export default TaskModel;
