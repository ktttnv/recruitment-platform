import { getTasksData } from './data/tasks';
import { add } from '../server/api/task/api';
import User from '../server/models/typescript/user';

export async function addTasks(users: User[]) {
    const promises = getTasksData(users).map((task) => add(task));

    await Promise.all(promises)
        .then((_res) => {
            console.log('Finished adding tasks');
        })
        .catch((error) => {
            console.log(`Failed adding tasks, error: ${error}`);
        });
}
