import type { RequestHandler, Response, Request } from 'express';
import expressPromiseRouter from 'express-promise-router';

import * as VacancyApi from './api';

function init() {
    const router = expressPromiseRouter();

    router.get('/list', ...getVacancyList);
    router.get('/:id', ...getVacancyById);
    router.put('/update/:id', ...updateVacancyById);
    router.post('/new', ...addVacancy);

    return router;
}

const getVacancyList = [
    async (_req: Request, res: Response) => {
        const vacancies = await VacancyApi.getAll();

        return res.status(200).json(vacancies);
    },
] as RequestHandler[];

const getVacancyById = [
    async (req: Request, res: Response) => {
        const vacansyId = req.params.id;
        const vacancy = await VacancyApi.getById(vacansyId);
        return res.status(200).json(vacancy);
    },
] as RequestHandler[];

const updateVacancyById = [
    async (req: Request, res: Response) => {
        const vacancyId = req.params.id;
        const vacancy = req.body.vacancy;

        const updatedVacancy = await VacancyApi.updateById(vacancyId, vacancy);

        return res.status(200).json(updatedVacancy);
    },
] as RequestHandler[];

const addVacancy = [
    async (req: Request, res: Response) => {
        const vacancy = req.body.vacancy;

        const newVacancy = await VacancyApi.add(vacancy);

        return res.status(200).json(newVacancy);
    },
] as RequestHandler[];

module.exports = init();
