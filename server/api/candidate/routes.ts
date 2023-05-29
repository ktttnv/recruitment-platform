import type { RequestHandler, Response, Request } from 'express';
import expressPromiseRouter from 'express-promise-router';

import * as CandidateApi from './api';
import { uploadCV } from '../utils/s3Utils'; 
import { getFileExtname } from '../utils';

function init() {
    const router = expressPromiseRouter();

    router.get('/list', ...getCandidateList);
    router.get('/:id', ...getCandidateById);
    router.put('/update/:id', ...updateCandidateById);
    router.put('/update/cv/:id', ...updateCV);
    router.post('/new', ...addCandidate);

    return router;
}

const getCandidateList = [
    async (_req: Request, res: Response) => {
        const candidates = await CandidateApi.getAll();

        return res.status(200).json(candidates);
    },
] as RequestHandler[];

const getCandidateById = [
    async (req: Request, res: Response) => {
        const candidateId = req.params.id;
        const candidate = await CandidateApi.getById(candidateId);

        return res.status(200).json(candidate);
    },
] as RequestHandler[];

const updateCandidateById = [
    async (req: Request, res: Response) => {
        const candidateId = req.params.id;
        const candidate = req.body.candidate;

        const updatedCandidate = await CandidateApi.updateById(candidateId, candidate);

        return res.status(200).json(updatedCandidate);
    },
] as RequestHandler[];

const addCandidate = [
    async (req: Request, res: Response) => {
        const candidate = req.body.candidate;
        const localPathName = req.body.localPathName;
        const buffer = req.body.buffer;
        let fileExtname;

        if (localPathName) {
            fileExtname = getFileExtname(localPathName);
            candidate.cvExt = fileExtname;
        }

        const newCandidate = await CandidateApi.add(candidate);
        fileExtname && await uploadCV(newCandidate._id!.toString(), fileExtname, buffer);

        return res.status(200).json(newCandidate);
    },
] as RequestHandler[];

const updateCV = [
    async (req: Request, res: Response) => {
        const candidateId = req.params.id;
        const localPathName = req.body.localPathName;
        const buffer = req.body.buffer;

        if (!localPathName) {
            return res.status(400);
        }

        const fileExtname = getFileExtname(localPathName);

        const newCandidate = await CandidateApi.updateCVById(candidateId, fileExtname);
        await uploadCV(candidateId, `${candidateId}${fileExtname}`, buffer);

        return res.status(200).json(newCandidate);
    },
] as RequestHandler[];

module.exports = init();
