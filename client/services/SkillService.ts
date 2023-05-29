import { SKILL } from '../../server/models/utils/routers';
import { Skill } from '../models/Skill';

import Request from './utils/Request';

class SkillService {
    private request;

    constructor() {
        this.request = new Request();
    }

    getSkills = async () => {
        try {
            const result = await this.request.get(`${SKILL}/list`);
            return result.json();
        } catch (error) {
            console.log(`getSkills request return error: ${error}`);
            return [];
        }
    };

    addSkill = async (skill: Skill) => {
        try {
            await this.request.post(`${SKILL}/new`, { body: { skill } });
        } catch (error) {
            console.log(`addSkill request return error: ${error}`);
            return [];
        }
    };
}

export { SkillService };
