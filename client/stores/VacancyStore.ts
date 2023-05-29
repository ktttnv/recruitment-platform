import { makeAutoObservable, runInAction } from 'mobx';

import { Vacancy } from '../models/Vacancy';
import { VacancyService } from '../services';

export default class VacancyStore {
    private vacancyDictionaryRaw: Record<string, Vacancy> = {};
    vacancyService!: VacancyService;

    constructor() {
        makeAutoObservable(this);

        this.vacancyService = new VacancyService();
    }

    async init() {
        await this.getVacancies();
    }

    get vacancies() {
		return this.vacancyDictionaryRaw;
    }

    async getVacancies() {
        const vacancies = await this.vacancyService.getVacancies();
        this.vacancyDictionaryRaw = vacancies.reduce((result: Record<string, Vacancy>, vacancy: Vacancy) => {
            result[vacancy._id] = vacancy;
            return result;
        }, {});

        return this.vacancyDictionaryRaw;
    }

    async getVacancyById(vacancyId: string) {
        return this.vacancyService.getVacancyById(vacancyId);
    }

    updateVacancyById(vacancyId: string, vacancy: Vacancy) {
        runInAction(async () => {
            const newVacancy = await this.vacancyService.updateVacancyById(vacancyId, vacancy);
            this.vacancyDictionaryRaw[vacancyId] = newVacancy
        });
    }

	async addVacancy(vacancy: Vacancy) {
        const newVacancy = await this.vacancyService.addVacancy(vacancy);
        this.vacancyDictionaryRaw[newVacancy._id] = newVacancy;

        return newVacancy._id;
    }
}
