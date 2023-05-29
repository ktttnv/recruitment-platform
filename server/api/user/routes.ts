import isString from 'lodash/isString';
import type { RequestHandler, Response, Request } from 'express';
import expressPromiseRouter from 'express-promise-router';

import * as requestValidator from '../../utils/middleware/request-validator';
import * as UserApi from './api';
import * as RoleApi from './role-api';

function init() {
    const router = expressPromiseRouter();

    router.get('/login', ...login);
    router.get('/list', ...getUserList);
    router.get('/:id', ...getUserById);
    router.put('/update', ...updateUser);
    router.put('/update/:id', ...updateUserById);
    router.post('/new', ...addUser);

    router.post('/roles/new', ...addRole);
    router.put('/roles/update/:id', ...updateRoleById);

    return router;
}

const login = [
    requestValidator.paramExists('body.login', isString),
    requestValidator.paramExists('body.password', isString),
    async (req: Request, res: Response) => {
        const isValid = await UserApi.login(req.body.login, req.body.password);

        if (isValid) {
            return res.sendStatus(401);
            // return next('InvalidCredentialsError');
        }

        return res.status(200);
    },
] as RequestHandler[];

const getUserList = [
    async (_req: Request, res: Response) => {
        const users = await UserApi.getAll();

        return res.status(200).json(users);
    },
] as RequestHandler[];

const getUserById = [
    async (req: Request, res: Response) => {
        const userId = req.params.id;
        const user = await UserApi.getById(userId);

        return res.status(200).json(user);
    },
] as RequestHandler[];

const updateUser = [
    async (req: Request, res: Response) => {
        const user = req.body.user;

        const updatedUser = await UserApi.update(user.id, user);

        return res.status(200).json(updatedUser);
    },
] as RequestHandler[];

const updateUserById = [
    async (req: Request, res: Response) => {
        const userId = req.params.id;
        const user = req.body.user;

        const updatedUser = await UserApi.updateById(userId, user);

        return res.status(200).json(updatedUser);
    },
] as RequestHandler[];

const addUser = [
    async (req: Request, res: Response) => {
        const user = req.body.user;

        await UserApi.add(user);

        return res.status(200).json(user);
    },
] as RequestHandler[];

const addRole = [
    async (req: Request, res: Response) => {
        const role = req.body.role;

        await RoleApi.add(role);

        return res.status(200).json(role);
    },
] as RequestHandler[];

const updateRoleById = [
    async (req: Request, res: Response) => {
        const roleId = req.params.id;
        const role = req.body.role;

        await RoleApi.updateById(roleId, role);

        return res.status(200);
    },
] as RequestHandler[];

module.exports = init();
