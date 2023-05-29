import { TEMPLATE } from '../../server/models/utils/routers';
import { Template } from '../models/Template';

import Request from './utils/Request';

class TemplateService {
    private request;

    constructor() {
        this.request = new Request();
    }

    getTemplates = async (userId: string) => {
        try {
            const result = await this.request.post(`${TEMPLATE}/list`, { body: { userId } });
            return result.json();
        } catch (error) {
            console.log(`getTemplates request return error: ${error}`);
            return [];
        }
    };

    addTemplate = async (template: Template) => {
        try {
            const result = await this.request.post(`${TEMPLATE}/new`, { body: { template } });
            return result.json();
        } catch (error) {
            console.log(`addTemplate request return error: ${error}`);
            return [];
        }
    };
}

export { TemplateService };
