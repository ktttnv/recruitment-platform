import { makeAutoObservable, runInAction } from 'mobx';

import { Permission, User } from '../models/User';
import { UserService } from '../services';

export default class UserStore {
    private userRaw!: User;
    // TODO: Temporary changes add here id of user
    private userIdRaw: string = '';
    private userDicionaryRaw: Record<string, User> = {};
    private permissionRaw!: Permission;

    userService!: UserService;

    constructor() {
        makeAutoObservable(this);

        this.userService = new UserService();
    }

    async init() {
        const resivedUserData = await this.getUserById(this.userIdRaw);
        this.userRaw = Array.isArray(resivedUserData) ? resivedUserData[0] : resivedUserData;
    }

    get userId() {
		return this.userIdRaw;
    }

    get user() {
		return this.userRaw;
    }

    get userDicionary() {
		return this.userDicionaryRaw;
    }

    set user(updatedUser: User) {
		runInAction(async () => {
            const newVacancy = await this.userService.updateUser(updatedUser);
            this.userRaw = newVacancy;
            this.permissionRaw = newVacancy.role.permission;
        });
    }

    async login(login: string, password: string) {
        runInAction(async () => {
            const newVacancy = await this.userService.login(login, password);
            this.userRaw = newVacancy;
        });
    }

    async addUser(userId: string, user: User) {
        if (!this.permissionRaw.isAddNewUser) {
            console.log('You don`t have access to add/update new user');
            return;
        }

        runInAction(async () => {
            const newVacancy = await this.userService.addUser(user);
            this.userDicionaryRaw[userId] = newVacancy
        });
    }

    async getUserById(userId: string) {
        return this.userService.getUserById(userId);
    }

    updateUserById(userId: string, user: User) {
        if (!this.permissionRaw.isAddNewUser) {
            console.log('You don`t have access to add/update new user');
            return;
        }

        runInAction(async () => {
            const newUser = await this.userService.updateUserById(userId, user);
            this.userDicionaryRaw[userId] = newUser
        });
    }

    async getUsers() {
        const users = await this.userService.getUsers();
        this.userDicionaryRaw = users.reduce((result: Record<string, User>, user: User) => {
            result[user._id] = user;
            return result;
        }, {});

        return this.userDicionaryRaw;
    }
}
