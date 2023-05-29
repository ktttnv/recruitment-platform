import type { RequestHandler, Response, Request } from 'express';
import expressPromiseRouter from 'express-promise-router';

import * as TaskApi from './api';

function init() {
    const router = expressPromiseRouter();

    router.post('/list', ...getTaskList);
    router.post('/new', ...addTask);

    return router;
}

const getTaskList = [
    async (req: Request, res: Response) => {
        const userId = req.body.userId;
        const date = req.body.date;

        const tasks = await TaskApi.getAll(userId, date);
        return res.status(200).json(tasks);
    },
] as RequestHandler[];

const addTask = [
    async (req: Request, res: Response) => {
        const task = req.body.task;

        await TaskApi.add(task);

        return res.status(200);
    },
] as RequestHandler[];

module.exports = init();
