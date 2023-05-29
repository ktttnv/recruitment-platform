import { User } from './User';

export enum ConnectionCommentEntityEnum {
    USER = 'user',
    CANDIDATE = 'candidate',
    VACANCY = 'vacancy',
};

export type Comment = {
    _user: User;
    _candidate: string;
    _vacancy: string;
    date: Date;
    text: string;
};
