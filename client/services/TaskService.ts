import { TASK } from '../../server/models/utils/routers';
import { Task } from '../models/Task';

import Request from './utils/Request';

class TaskService {
    private request;

    constructor() {
        this.request = new Request();
    }

    getTasksByDate = async (userId: string, date: string) => {
        try {
            const result = await this.request.post(`${TASK}/list`, { body: { userId, date: String(date) } });
            return result.json();
        } catch (error) {
            console.log(`getTasksByDate request return error: ${error}`);
            return [];
        }
    };

    addTask = async (task: Task) => {
        try {
            const result = await this.request.post(`${TASK}/new`, { body: { task } });
            return result.json();
        } catch (error) {
            console.log(`addTask request return error: ${error}`);
            return [];
        }
    };
}

export { TaskService };
