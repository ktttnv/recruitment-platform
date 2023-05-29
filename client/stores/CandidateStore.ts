import { makeAutoObservable, runInAction } from 'mobx';

import { CandidateService } from '../services';
import { Candidate } from '../models/Candidate';

export default class CandidateStore {
    private candidateDictionaryRaw: Record<string, Candidate> = {};
    candidateService!: CandidateService;

    constructor() {
        makeAutoObservable(this);

        this.candidateService = new CandidateService();
    }

    async init() {
        await this.getCandidates();
    }

    get candidates() {
		return this.candidateDictionaryRaw;
    }

    async getCandidates() {
        const candidates = await this.candidateService.getCandidates();
        this.candidateDictionaryRaw = candidates.reduce((result: Record<string, Candidate>, candidate: Candidate) => {
            result[candidate._id] = candidate;
            return result;
        }, {});

        return this.candidateDictionaryRaw;
    }

    async getCandidateById(candidateId: string) {
        return this.candidateService.getCandidateById(candidateId);
    }

    updateCandidateById(candidateId: string, candidate: Candidate) {
        runInAction(async () => {
            const newCandidate = await this.candidateService.updateCandidateById(candidateId, candidate);
            this.candidateDictionaryRaw[candidateId] = newCandidate;
        });
    }

	async addCandidate(candidate: Candidate, localPathName?: string, buffer?: Buffer) {
        const newCandidate = await this.candidateService.addCandidate(candidate, localPathName, buffer);
        this.candidateDictionaryRaw[newCandidate._id] = newCandidate;

        return newCandidate._id;
    }

    updateCVCandidateById(candidateId: string, localPathName?: string, buffer?: Buffer) {
        runInAction(async () => {
            const newCandidate = await this.candidateService.updateCVCandidateById(candidateId, localPathName, buffer);
            this.candidateDictionaryRaw[candidateId] = newCandidate;
        });
    }
}
