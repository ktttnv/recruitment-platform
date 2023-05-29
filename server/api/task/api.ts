import mongoose from 'mongoose';

import Task from '../../models/typescript/task';
import TaskModel from '../../models/tasks';

import ObjectId = mongoose.Types.ObjectId;

export async function getAll(userId: string, date: string) {
    const id = new ObjectId(userId);

    return TaskModel.find({
        _user: id,
        // date: {
        //     $gte: "2021-01-20",
        //     $lte: "2021-02-15",
        // }
    });
}

export async function add(task: Task) {
    try {
        const newTask = new TaskModel(task);

        return newTask.save();
    } catch (error) {
        console.log(`Error occured during calling add task function, error: ${error}`);
        throw error;
    }
}
