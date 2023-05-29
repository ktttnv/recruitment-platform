import { makeAutoObservable, runInAction } from 'mobx';
import { Template } from '../models/Template';
import { TemplateService } from '../services';

export default class TemplateStore {
    private templateDictionaryRaw: Record<string, Template> = {};
    templateService!: TemplateService;

    constructor() {
        makeAutoObservable(this);

        this.templateService = new TemplateService();
    }

    async getTemplates(userId: string) {
        const templates = await this.templateService.getTemplates(userId);

        templates.forEach((templates) => {
            this.templateDictionaryRaw[templates._id] = templates;
        });

        return templates;
    }

    async addTemplate(template: Template) {
        runInAction(async () => {
            const newTemplate = await this.templateService.addTemplate(template);
            this.templateDictionaryRaw[newTemplate._id] = newTemplate;
        });
    }

	get templates() {
		return this.templateDictionaryRaw;
    }
}
