import mongoose from 'mongoose';
import Skill from './skill';

import ObjectId = mongoose.Types.ObjectId;
import MongooseArray = mongoose.Types.Array;

export type Vacancy = IVacancy;

export default Vacancy;

type VacancyStatus = 'opened' | 'preparation' | 'search' | 'interview' | 'hiring' | 'on_hold' | 'closed';
type LocationPreference = 'office' | 'remote' | 'office/remote';

type SalarySettings = {
    from: number;
    to: number;
};

type IVacancy = {
    _id?: mongoose.Types.ObjectId;
    title: string;
    description: string;
    url?: string[];
    salary: SalarySettings;
    location: LocationPreference;
    status: VacancyStatus;
    createdDate?: Date;
    deadlineDate?: Date;
    _skills: MongooseArray<ObjectId | Skill>;
};
