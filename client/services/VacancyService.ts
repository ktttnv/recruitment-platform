import { VACANCY } from '../../server/models/utils/routers';
import { Vacancy } from '../models/Vacancy';
import Request from './utils/Request';

class VacancyService {
    private request;

    constructor() {
        this.request = new Request();
    }

    getVacancies = async () => {
        try {
            const result = await this.request.get(`${VACANCY}/list`);
            return result.json();
        } catch (error) {
            console.log(`getVacancy request return error: ${error}`);
            return [];
        }
    };

    addVacancy = async (vacancy: Vacancy) => {
        try {
            const result = await this.request.post(`${VACANCY}/new`, { body: { vacancy } });
            return result.json();
        } catch (error) {
            console.log(`getVacancy request return error: ${error}`);
        }
    };

    getVacancyById = async (vacancyId: string) => {
        try {
            const result = await this.request.get(`${VACANCY}/${vacancyId}`);
            return result.json();
        } catch (error) {
            console.log(`getVacancyById request return error: ${error}`);
            return {};
        }
    };

    updateVacancyById = async (vacancyId: string, vacancy: Vacancy) => {
        try {
            const result = await this.request.put(`${VACANCY}/update/${vacancyId}`, { body: { vacancy } });
            return result.json();
        } catch (error) {
            console.log(`updateVacancyById request return error: ${error}`);
            return {};
        }
    };
}

export { VacancyService };
