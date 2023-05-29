import { getComments } from './data/comments';
import { add } from '../server/api/comment/api';
import User from '../server/models/typescript/user';
import Vacancy from '../server/models/typescript/vacancy';
import Candidate from '../server/models/typescript/candidate';

export async function getComment(users: User[], vacancies: Vacancy[], candidates: Candidate[]) {
    const promises = getComments(users, vacancies, candidates).map((comment) => add(comment));

    await Promise.all(promises)
        .then((_res) => {
            console.log('Finished adding comments');
        })
        .catch((error) => {
            console.log(`Failed adding comments, error: ${error}`);
        });
}
