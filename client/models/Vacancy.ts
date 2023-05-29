import { Skill } from './Skill';

type SalarySettings = {
	from: number;
	to: number;
};

export enum LocationEnum {
	OFFICE = 'office',
	REMOTE = 'remote',
	OFFICE_OR_REMOTE = 'office/remote',
}

export enum StatusEnum {
	OPENED = 'opened',
	PREPARATION = 'preparation',
	SEARCH = 'search',
	INTERVIEW = 'interview',
	HIRING = 'hiring',
	ON_HOLD = 'on_hold',
	CLOSED = 'closed',
};

export type Vacancy = {
	_id?: string;
    title: string;
	description: string;
    url?: string[];
	salary: SalarySettings;
	location: LocationEnum;
	status: StatusEnum;
	createdDate?: Date,
	deadlineDate?: Date,
	_skills: Array<Skill>,
};
