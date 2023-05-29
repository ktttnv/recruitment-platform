import { makeAutoObservable, runInAction } from 'mobx';
import { Task } from '../models/Task';
import { TaskService } from '../services';

export default class TaskStore {
    private tasksRaw: Record<string, Task> = {};
    taskService!: TaskService;

    constructor() {
        makeAutoObservable(this);

        this.taskService = new TaskService();
    }

    async init(userId: string) {
        const todayDateString = new Date(Date.now()).toISOString();
        await this.getTasksRange(userId, todayDateString);
    }

    async getTasks(userId: string, todayDateString: string) {
        const todayTasks = await this.taskService.getTasksByDate(userId, todayDateString);
        const tomorrow  = new Date(todayDateString);
        tomorrow.setDate(tomorrow.getDate() + 1);

        this.tasksRaw[todayDateString] = todayTasks;

        return this.tasksRaw;
    }

    async getTasksRange(userId: string, todayDateString: string) {
        const todayTasks = await this.taskService.getTasksByDate(userId, todayDateString);
        const tomorrow  = new Date(todayDateString);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const tomorrowTasks = await this.taskService.getTasksByDate(userId, tomorrow.toString());
        
        this.tasksRaw[todayDateString] = todayTasks;
        this.tasksRaw[tomorrow.toString()] = tomorrowTasks;

        return [todayTasks, tomorrowTasks];
    }

    async addTask(task: Task) {
        runInAction(async () => {
            const newTask = await this.taskService.addTask(task);
            this.tasksRaw[newTask._id] = newTask;
        });
    }

	get tasks() {
		return Object.values(this.tasksRaw);
    }
}
