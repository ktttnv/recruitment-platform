import { Candidate } from '../models/Candidate';
import { User } from '../models/User';

export function getUserName(account: User | Candidate): string {
	const {surname, name, patronymic} = account;

	return `${surname} ${name} ${patronymic}`;
}
