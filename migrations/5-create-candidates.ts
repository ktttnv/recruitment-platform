import { getCandidatesData } from './data/candidates';
import { add } from '../server/api/candidate/api';
import Skill from '../server/models/typescript/skill';
import User from '../server/models/typescript/user';

export async function addCandidates(skills: Skill[], users: User[]) {
    const promises = getCandidatesData(skills, users).map((candidate) => add(candidate));

    return Promise.all(promises)
        .then((res) => {
            console.log('Finished adding candidates');
            return res;
        })
        .catch((error) => {
            console.log(`Failed adding candidates, error: ${error}`);
        });
}
