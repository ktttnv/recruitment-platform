import { Salary } from './salary';
import { Skill } from './skills';

export type VacancyInfo = {
    id: string;
    position: string;
    description: string;
    status: string;
    skills: Array<Skill>;
    location: string;
    salary: Salary;
};
