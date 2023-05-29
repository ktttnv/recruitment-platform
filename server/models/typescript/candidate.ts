import mongoose from 'mongoose';

import Skill from './skill';
import User from './user';

import ObjectId = mongoose.Types.ObjectId;
import MongooseArray = mongoose.Types.Array;

export type Candidate = ICandidate;

export default Candidate;

export type SocialNetwork = {
    link: string;
    type: 'linkedin' | 'vk' | 'telegram' | 'hh' | 'email';
    isMain?: boolean;
};

type Status = {
    type: 'not_search' | 'active_serach' | 'slow_search';
    date: Date;
};

type ActionStatus = 'find' | 'talk' | 'interview' | 'hiring' | 'black_list';

type LastAction = {
    date: Date;
    status: ActionStatus;
};

type ICandidate = {
    _id?: mongoose.Types.ObjectId;
    name: string;
    surname: string;
    patronymic: string;
    email: string;
    photo?: string;
    specialization: string;
    startCareerDate: Date;
    _skills: MongooseArray<ObjectId | Skill>;
    cvExt?: string;
    lastAction: LastAction;
    socialNetworks: SocialNetwork[];
    status: Status;
	_user?: ObjectId | User;
};
