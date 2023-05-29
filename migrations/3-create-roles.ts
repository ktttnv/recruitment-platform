import { roles } from './data/roles';
import { add } from '../server/api/user/role-api';

export async function addRoles() {
    const promises = roles.map((role) => add(role));

    const newRoles = await Promise.all(promises)
        .then((res) => {
            console.log('Finished adding roles');
            return res;
        })
        .catch((error) => {
            console.log(`Failed adding roles, error: ${error}`);
        });

    return newRoles;
}
