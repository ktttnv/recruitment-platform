import { Skill } from './Skill';
import { User } from './User';

export enum SocialNetworkEnum {
	LINKEDIN = 'linkedin',
	VK = 'vk',
	TELEGRAM = 'telegram',
	HH = 'hh',
	EMAIL = 'email',
};

type SocialNetwork = {
    link: string;
    type: SocialNetworkEnum;
    isMain?: boolean;
};

export enum StatusEnum {
	NOT_SEARCH = 'not_search',
	ACTIVE_SEARCH = 'active_serach',
	SLOW_SEARCH = 'slow_search',
};

type Status = {
    type: StatusEnum;
    date: Date;
};

export enum ActionStatusEnum {
	FIND = 'find',
	TALK = 'talk',
	INTERVIEW = 'interview',
	HIRING = 'hiring',
	BLACK_LIST = 'black_list',
};

type LastAction = {
    date: Date;
    status: ActionStatusEnum;
};

export type Candidate = {
	_id?: string;
    name: string;
    surname: string;
    patronymic: string;
    email: string;
    photo?: string;
    specialization: string;
    startCareerDate: Date;
    _skills: Array<Skill>;
    cvExt?: string;
    lastAction: LastAction;
    socialNetworks: SocialNetwork[];
    status: Status;
	_user?: User;
};
