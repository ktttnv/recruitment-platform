import express from 'express';

import { VACANCY, SKILL, USER, CANDIDATE, TASK, COMMENT, TEMPLATE } from '../../models/utils/routers';

export default function initRoutes() {
    const router = express.Router();

    router.use(VACANCY, require('../../api/vacancy/routes'));
    router.use(SKILL, require('../../api/skill/routes'));
    router.use(USER, require('../../api/user/routes'));
    router.use(CANDIDATE, require('../../api/candidate/routes'));
    router.use(TASK, require('../../api/task/routes'));
    router.use(COMMENT, require('../../api/comment/routes'));
    router.use(TEMPLATE, require('../../api/template/routes'));

    return router;
}
