import { CANDIDATE } from '../../server/models/utils/routers';
import { Candidate } from '../models/Candidate';
import Request from './utils/Request';

class CandidateService {
    private request;

    constructor() {
        this.request = new Request();
    }

    getCandidates = async () => {
        try {
            const result = await this.request.get(`${CANDIDATE}/list`);
            return result.json();
        } catch (error) {
            console.log(`getCandidates request return error: ${error}`);
            return [];
        }
    };

    addCandidate = async (candidate: Candidate, localPathName?: string, buffer?: Buffer) => {
        try {
            const result = await this.request.post(`${CANDIDATE}/new`, { body: { candidate, localPathName, buffer } });
            return result.json();
        } catch (error) {
            console.log(`addCandidate request return error: ${error}`);
        }
    };

    getCandidateById = async (candidateId: string) => {
        try {
            const result = await this.request.get(`${CANDIDATE}/${candidateId}`);
            return result.json();
        } catch (error) {
            console.log(`getCandidateById request return error: ${error}`);
            return {};
        }
    };

    updateCandidateById = async (candidateId: string, candidate: Candidate) => {
        try {
            const result = await this.request.put(`${CANDIDATE}/update/${candidateId}`, { body: { candidate } });
            return result.json();
        } catch (error) {
            console.log(`updateCandidateById request return error: ${error}`);
            return {};
        }
    };

    updateCVCandidateById = async (candidateId: string, localPathName: string, buffer: Buffer) => {
        try {
            const result = await this.request.put(`${CANDIDATE}/update/cv/${candidateId}`, {
                body: { localPathName, buffer },
            });
            return result.json();
        } catch (error) {
            console.log(`updateCVCandidateById request return error: ${error}`);
            return {};
        }
    };
}

export { CandidateService };
