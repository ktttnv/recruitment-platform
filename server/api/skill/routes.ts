import type { RequestHandler, Response, Request } from 'express';
import expressPromiseRouter from 'express-promise-router';

import * as SkillApi from './api';

function init() {
    const router = expressPromiseRouter();

    router.get('/list', ...getSkillList);
    router.post('/new', ...addSkill);

    return router;
}

const getSkillList = [
    async (_req: Request, res: Response) => {
        const skills = await SkillApi.getAll();

        return res.status(200).json(skills);
    },
] as RequestHandler[];

const addSkill = [
    async (req: Request, res: Response) => {
        const skill = req.body.skill;

        await SkillApi.add(skill);

        return res.status(200);
    },
] as RequestHandler[];

module.exports = init();
