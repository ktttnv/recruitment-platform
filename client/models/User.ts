export enum  RoleEnum {
	ADMIN = 'admin',
	HR = 'hr',
	EMPLOYEE = 'employee',
	USER = 'user',
};

export type Permission = {
    isAddNewUser: boolean;
    isAddVacancy: boolean;
	canInterview: boolean;
	canUpdatePermissions: boolean;
};

type Role = {
    roleId: RoleEnum;
    permission: Permission;
};

export type User = {
	_id: string;
    name: string;
    surname: string;
    patronymic: string;
	photo?: string;
    email: string;
	role: Role;
};
