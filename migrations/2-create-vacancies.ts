import { getVacanciesData } from './data/vacancies';
import { add } from '../server/api/vacancy/api';
import Skill from '../server/models/typescript/skill';

export async function addVacancies(skills: Skill[]) {
    const promises = getVacanciesData(skills).map((vacancy) => add(vacancy));

    return Promise.all(promises)
        .then((res) => {
            console.log('Finished adding vacancies');
            return res;
        })
        .catch((error) => {
            console.log(`Failed adding vacancies, error: ${error}`);
        });
}
