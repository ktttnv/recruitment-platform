import { getUsersData } from './data/users';
import { add } from '../server/api/user/api';
import Role from '../server/models/typescript/role';

export async function addUsers(rols: Role[]) {
    const promises = getUsersData(rols).map((user) => add(user));

    const newUsers = await Promise.all(promises)
        .then((res) => {
            console.log('Finished adding users');
            return res;
        })
        .catch((error) => {
            console.log(`Failed adding users, error: ${error}`);
        });
    return newUsers;
}
