import { USER } from '../../server/models/utils/routers';
import { User } from '../models/User';
import Request from './utils/Request';

class UserService {
    private request;

    constructor() {
        this.request = new Request();
    }

    login = async (login: string, password: string) => {
        try {
            const body = {
                login,
                password,
            };
            const result = await this.request.get(`${USER}/login`, { body });
            return result.json();
        } catch (error) {
            console.log(`login request return error: ${error}`);
            return [];
        }
    };

    addUser = async (user: User) => {
        try {
            const result = await this.request.post(`${USER}/new`, { body: { user } });
            return result.json();
        } catch (error) {
            console.log(`addUser request return error: ${error}`);
        }
    };

    updateUser = async (user: User) => {
        try {
            const result = await this.request.post(`${USER}/update`, { body: { user } });
            return result.json();
        } catch (error) {
            console.log(`updateUser request return error: ${error}`);
        }
    };

    getUsers = async () => {
        try {
            const result = await this.request.get(`${USER}/list`);
            return result.json();
        } catch (error) {
            console.log(`getUsers request return error: ${error}`);
            return [];
        }
    };

    getUserById = async (userId: string) => {
        try {
            const result = await this.request.get(`${USER}/${userId}`);
            return result.json();
        } catch (error) {
            console.log(`getUserById request return error: ${error}`);
            return {};
        }
    };

    updateUserById = async (userId: string, user: User) => {
        try {
            const result = await this.request.put(`${USER}/update/${userId}`, { body: { user } });
            return result.json();
        } catch (error) {
            console.log(`updateUserById request return error: ${error}`);
            return {};
        }
    };
}

export { UserService };
