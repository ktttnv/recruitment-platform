import { getTemplates } from './data/templates';
import { add } from '../server/api/template/api';
import User from '../server/models/typescript/user';
import Vacancy from '../server/models/typescript/vacancy';

export async function getTemplate(users: User[], vacancies: Vacancy[]) {
    const promises = getTemplates(users, vacancies).map((template) => add(template));

    await Promise.all(promises)
        .then((_res) => {
            console.log('Finished adding templates');
        })
        .catch((error) => {
            console.log(`Failed adding teplates, error: ${error}`);
        });
}
