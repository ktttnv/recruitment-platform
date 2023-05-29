import type { RequestHandler, Response, Request } from 'express';
import expressPromiseRouter from 'express-promise-router';

import * as TemplteApi from './api';

function init() {
    const router = expressPromiseRouter();

    router.post('/list', ...getTemplteList);
    router.post('/new', ...addTemplte);

    return router;
}

const getTemplteList = [
    async (req: Request, res: Response) => {
        const userId = req.body.userId;

        const templtes = await TemplteApi.getAll(userId);

        return res.status(200).json(templtes);
    },
] as RequestHandler[];

const addTemplte = [
    async (req: Request, res: Response) => {
        const templte = req.body.templte;

        await TemplteApi.add(templte);

        return res.status(200);
    },
] as RequestHandler[];

module.exports = init();
