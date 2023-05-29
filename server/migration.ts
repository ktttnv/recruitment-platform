import mongoose from 'mongoose';

import connectDB from './config/startup/db';
import Skill from './models/typescript/skill';
import Role from './models/typescript/role';
import User from './models/typescript/user';
import Vacancy from './models/typescript/vacancy';
import Candidates from './models/typescript/candidate';

import { addSkills } from '../migrations/1-create-skills';
import { addVacancies } from '../migrations/2-create-vacancies';
import { addRoles } from '../migrations/3-create-roles';
import { addUsers } from '../migrations/4-create-users';
import { addCandidates } from '../migrations/5-create-candidates';
import { addTasks } from '../migrations/6-create-tasks';
import { getComment } from '../migrations/7-create-comments';
import { getTemplate } from '../migrations/8-create-templates';

mongoose.Promise = global.Promise;

async function main() {
    await connectDB;

    const roles = await addRoles();
    const users = await addUsers(roles as Role[]);

    const skills = await addSkills();
    const vacancies = await addVacancies(skills as Skill[]);

    const candidates = await addCandidates(skills as Skill[], users as User[]);
    await addTasks(users as User[]);

    await getComment(users as User[], vacancies as Vacancy[], candidates as Candidates[]);
    await getTemplate(users as User[], vacancies as Vacancy[]);

    process.exit(1);
}

main();
