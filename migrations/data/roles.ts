import Role from '../../server/models/typescript/role';
import { RoleEnum } from '../../client/models/User';

export const roles: Role[] = [
	{
		roleId: RoleEnum.ADMIN,
		permission: {
			canInterview: true,
			canUpdatePermissions: true,
			isAddNewUser: true,
			isAddVacancy: true,
		}
	},
	{
		roleId: RoleEnum.HR,
		permission: {
			canInterview: true,
			canUpdatePermissions: false,
			isAddNewUser: true,
			isAddVacancy: true,
		}
	},
	{
		roleId: RoleEnum.EMPLOYEE,
		permission: {
			canInterview: false,
			canUpdatePermissions: false,
			isAddNewUser: false,
			isAddVacancy: true,
		}
	},
	{
		roleId: RoleEnum.USER,
		permission: {
			canInterview: true,
			canUpdatePermissions: false,
			isAddNewUser: true,
			isAddVacancy: true,
		}
	},
];
