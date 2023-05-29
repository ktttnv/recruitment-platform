import { skills } from './data/skills';
import { add } from '../server/api/skill/api';

export async function addSkills() {
    const promises = skills.map((skill) => add(skill));

    const newSkills = await Promise.all(promises)
        .then((res) => {
            console.log('Finished adding skills');
            return res;
        })
        .catch((error) => {
            console.log(`Failed adding skills, error: ${error}`);
        });
    return newSkills;
}
