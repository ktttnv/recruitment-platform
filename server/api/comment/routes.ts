import type { RequestHandler, Response, Request } from 'express';
import expressPromiseRouter from 'express-promise-router';

import * as CommentApi from './api';

function init() {
    const router = expressPromiseRouter();

    router.get('/user/:id', ...getUserCommentsById);
    router.get('/candidate/:id', ...getCandidateCommentsById);
    router.get('/vacancy/:id', ...getVacancyCommentsById);
    router.post('/new', ...addComment);

    return router;
}

const getUserCommentsById = [
    async (req: Request, res: Response) => {
        const userId = req.params.id;

        const comments = await CommentApi.getUserCommentsById(userId);

        return res.status(200).json(comments);
    },
] as RequestHandler[];

const getCandidateCommentsById = [
    async (req: Request, res: Response) => {
        const candidateId = req.params.id;

        const comments = await CommentApi.getCandidateCommentsById(candidateId);

        return res.status(200).json(comments);
    },
] as RequestHandler[];

const getVacancyCommentsById = [
    async (req: Request, res: Response) => {
        const vacancyId = req.params.id;

        const comments = await CommentApi.getVacancyCommentsById(vacancyId);

        return res.status(200).json(comments);
    },
] as RequestHandler[];

const addComment = [
    async (req: Request, res: Response) => {
        const comment = req.body.comment;

        const newComment = await CommentApi.add(comment);

        return res.status(200).json(newComment);
    },
] as RequestHandler[];

module.exports = init();
