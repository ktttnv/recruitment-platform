import mongoose from 'mongoose';

import { SocialNetworkEnum, StatusEnum, ActionStatusEnum } from '../../client/models/Candidate';
import Candidate from '../../server/models/typescript/candidate';
import User from '../../server/models/typescript/user';
import Skill from '../../server/models/typescript/skill';
import { getBase64FromUrl } from '../../client/utils/photo';
import { getRandomNumberArray } from '../utils';

import ObjectId = mongoose.Types.ObjectId;
import MongooseArray = mongoose.Types.Array;

export function getCandidatesData(skills: Skill[], users: User[]): Candidate[] {
	return [
		{
			name: 'Виктор',
            surname: 'Онопко',
            patronymic: 'Савельевич',
            email: 'onopko@gmail.com',
			photo: getBase64FromUrl('https://s5o.ru/storage/simple/ru/edt/37/fe/53/d8/rue869ed10cf9.png'),
			specialization: 'Senior Footballer',
			startCareerDate: new Date(1989, 0, 1),
			_skills: getRandomNumberArray(3, skills.length).map((id: number) => skills[id]._id) as MongooseArray<ObjectId>,
			lastAction: {
				date: new Date(2023, 4, 24),
				status: ActionStatusEnum.TALK,
			},
			socialNetworks: [{
				link: 'https://ru.wikipedia.org/wiki/Онопко,_Виктор_Савельевич',
				type: SocialNetworkEnum.LINKEDIN,
				isMain: true,
			}],
			status: {
				date: new Date(2023, 2, 15),
				type: StatusEnum.SLOW_SEARCH,
			},
			_user: users.find(user => user.email === 'onopko@gmail.com')?._id as ObjectId,
		},
		{
			name: 'Виктор',
			surname: 'Васнецов',
			patronymic: 'Михайлович',
			email: 'vasnecov@gmail.com',
			photo: getBase64FromUrl('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Wiktor_Michajlowitsch_Wassnezow_003.jpg/520px-Wiktor_Michajlowitsch_Wassnezow_003.jpg'),
			specialization: 'Senior Painter',
			startCareerDate: new Date(1989, 0, 1),
			_skills: getRandomNumberArray(3, skills.length).map((id: number) => skills[id]._id) as MongooseArray<ObjectId>,
			lastAction: {
				date: new Date(2020, 10, 19),
				status: ActionStatusEnum.BLACK_LIST,
			},
			socialNetworks: [
				{
					link: 'https://www.culture.ru/persons/9346/viktor-vasnecov',
					type: SocialNetworkEnum.HH,
					isMain: true,
				},
				{
					link: 'https://xn--1-7sba3bfrmq8c.xn--80acgfbsl1azdqr.xn--p1ai/resursnyy-centr/biblioteka/pamyatnye_daty/vasnecov/',
					type: SocialNetworkEnum.TELEGRAM,
				},
				{
					link: 'https://arthive.com/viktorvasnetsov',
					type: SocialNetworkEnum.LINKEDIN,
				}
			],
			status: {
				date: new Date(2020, 10, 19),
				type: StatusEnum.NOT_SEARCH,
			},
			_user: users.find(user => user.email === 'vasnecov@gmail.com')?._id as ObjectId,
		},
		{
			name: 'Андрей',
			surname: 'Рублев',
			patronymic: 'Андреевич',
			email: 'rublev@gmail.com',
			photo: getBase64FromUrl('https://upload.wikimedia.org/wikipedia/commons/8/84/Rublev%27s_saviour.jpg'),
			specialization: 'Senior Fronter Engeneer',
			startCareerDate: new Date(1950, 0, 1),
			_skills: getRandomNumberArray(8, skills.length).map((id: number) => skills[id]._id) as MongooseArray<ObjectId>,
			lastAction: {
				date: new Date(2020, 10, 19),
				status: ActionStatusEnum.HIRING,
			},
			socialNetworks: [
				{
					link: 'https://ru.wikipedia.org/wiki/Андрей_Рублёв',
					type: SocialNetworkEnum.HH,
					isMain: true,
				},
				{
					link: 'https://www.culture.ru/persons/9638/andrei-rublev',
					type: SocialNetworkEnum.TELEGRAM,
				},
				{
					link: 'https://arthive.com/andreirublev',
					type: SocialNetworkEnum.LINKEDIN,
					isMain: true,
				},
				{
					link: 'https://24smi.org/celebrity/4847-andrei-rublev.html',
					type: SocialNetworkEnum.VK,
				},
				{
					link: 'https://gallerix.ru/storeroom/1987495756/',
					type: SocialNetworkEnum.EMAIL,
					isMain: true,
				}
			],
			status: {
				date: new Date(2020, 10, 19),
				type: StatusEnum.NOT_SEARCH,
			},
		},
		{
			name: 'Стив',
			surname: 'Джобс',
			patronymic: '-',
			email: 'djops@gmail.com',
			photo: getBase64FromUrl('https://images.thevoicemag.ru/upload/img_cache/6d5/6d5924702c67a07783a8c0bd71ba29cc_cropped_1332x1306.webp'),
			specialization: 'Senior Fullstack Developer',
			startCareerDate: new Date(1945, 7, 28),
			_skills: getRandomNumberArray(8, skills.length).map((id: number) => skills[id]._id) as MongooseArray<ObjectId>,
			lastAction: {
				date: new Date(2015, 10, 19),
				status: ActionStatusEnum.INTERVIEW,
			},
			socialNetworks: [
				{
					link: 'https://ru.wikipedia.org/wiki/Джобс,_Стив',
					type: SocialNetworkEnum.TELEGRAM,
					isMain: true,
				},
				{
					link: 'https://www.tadviser.ru/index.php/Персона:Джобс_Стив_(Steve_Jobs)',
					type: SocialNetworkEnum.LINKEDIN,
					isMain: true,
				},
			],
			status: {
				date: new Date(2015, 10, 28),
				type: StatusEnum.NOT_SEARCH,
			},
		},
		{
			name: 'Робин',
			surname: 'Уильямс',
			patronymic: '-',
			email: 'robin@gmail.com',
			photo: getBase64FromUrl('https://upload.wikimedia.org/wikipedia/commons/5/59/Robin_Williams_Happy_Feet_premiere.jpg'),
			specialization: 'Senior Actor Developer',
			startCareerDate: new Date(1970, 7, 28),
			_skills: getRandomNumberArray(7, skills.length).map((id: number) => skills[id]._id) as MongooseArray<ObjectId>,
			lastAction: {
				date: new Date(2018, 10, 19),
				status: ActionStatusEnum.TALK,
			},
			socialNetworks: [
				{
					link: 'https://ru.wikipedia.org/wiki/%D0%A3%D0%B8%D0%BB%D1%8C%D1%8F%D0%BC%D1%81,_%D0%A0%D0%BE%D0%B1%D0%B8%D0%BD',
					type: SocialNetworkEnum.TELEGRAM,
					isMain: true,
				},
			],
			status: {
				date: new Date(2015, 10, 28),
				type: StatusEnum.SLOW_SEARCH,
			},
		},
		{
			name: 'Иван',
			surname: 'Охлобыстин',
			patronymic: 'Иванович',
			email: 'ohlobistin@gmail.com',
			photo: getBase64FromUrl('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_arm9V0RMiUQEcmUmGLCQ2TolR3wol1Uwd7lGZd6wqgMghC4P'),
			specialization: 'Senior Actor Developer',
			startCareerDate: new Date(1989, 11, 28),
			_skills: getRandomNumberArray(4, skills.length).map((id: number) => skills[id]._id) as MongooseArray<ObjectId>,
			lastAction: {
				date: new Date(2018, 10, 19),
				status: ActionStatusEnum.FIND,
			},
			socialNetworks: [
				{
					link: 'https://www.kinopoisk.ru/name/238527/?utm_referrer=www.google.com',
					type: SocialNetworkEnum.LINKEDIN,
					isMain: true,
				},
			],
			status: {
				date: new Date(2015, 10, 28),
				type: StatusEnum.SLOW_SEARCH,
			},
		},
		{
			name: 'Анатолий',
			surname: 'Кот',
			patronymic: 'Леонидович',
			email: 'cat@gmail.com',
			photo: getBase64FromUrl('https://thumbs.dfs.ivi.ru/storage30/contents/8/4/bcde2b8c5a303a24fdcd6089516e1e.png'),
			specialization: 'Senior Actor Developer',
			startCareerDate: new Date(1999, 17, 28),
			_skills: getRandomNumberArray(4, skills.length).map((id: number) => skills[id]._id) as MongooseArray<ObjectId>,
			lastAction: {
				date: new Date(2018, 10, 19),
				status: ActionStatusEnum.FIND,
			},
			socialNetworks: [
				{
					link: 'https://www.kinopoisk.ru/name/562496/',
					type: SocialNetworkEnum.LINKEDIN,
					isMain: true,
				},
			],
			status: {
				date: new Date(2015, 10, 28),
				type: StatusEnum.SLOW_SEARCH,
			},
		},
	];
}