import { makeAutoObservable } from 'mobx';
import { Skill } from '../models/Skill';
import { SkillService } from '../services';

export default class SkillStore {
    private skilsRaw: Skill[] = [];
    skillService!: SkillService;

    constructor() {
        makeAutoObservable(this);

        this.skillService = new SkillService();
    }

    async init() {
        this.skilsRaw = await this.getSkills();
    }

    async getSkills() {
        return this.skillService.getSkills();
    }

	get skills() {
		return this.skilsRaw;
    }
}
