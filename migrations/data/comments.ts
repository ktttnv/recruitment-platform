import mongoose from 'mongoose';

import Comment from '../../server/models/typescript/comment';
import User from '../../server/models/typescript/user';
import Vacancy from '../../server/models/typescript/vacancy';
import Candidate from '../../server/models/typescript/candidate';
import { getRandomNumberArray } from '../utils';

import ObjectId = mongoose.Types.ObjectId;

export function getComments(users: User[], vacancies: Vacancy[], candidates: Candidate[]): Comment[] {
	const candidateCommentsData = users.map((user: User) => {
		const countComments = getRandomNumberArray(1, candidateComments.length)[0];
		return candidateComments.slice(0, countComments).map((comment) => {
			return {
				...comment,
				_user: new ObjectId(user._id),
				_candidate: getRandomNumberArray(1, candidates.length).map((id: number) => candidates[id]._id)[0],
			} as Comment;
		});
	}).flat();

	const vacancyCommentsData = users.map((user: User) => {
		const countComments = getRandomNumberArray(1, vacancyComments.length)[0];
		return vacancyComments.slice(0, countComments).map((comment) => {
			return {
				...comment,
				_user: new ObjectId(user._id),
				_vacancy: getRandomNumberArray(1, vacancies.length).map((id: number) => vacancies[id]._id)[0],
				_candidate: getRandomNumberArray(1, candidates.length).map((id: number) => candidates[id]._id)[0],
			} as Comment;
		});
	}).flat();

	return candidateCommentsData.concat(vacancyCommentsData);
}

const candidateComments: Omit<Comment, '_user'>[] = [
	{
		text: "Замечательный кандидат, спасибо за информацию!",
		date: new Date("2023-01-01")
	},
	{
		text: "Можно ли узнать о его прошлом опыте работы?",
		date: new Date("2023-01-02")
	},
	{
		text: "Было легко наладить контакт, надеюсь на успешное интервью!",
		date: new Date("2023-01-03")
	},
	{
		text: "Спасибо, что напомнили об этом кандидате, посмотрю внимательнее",
		date: new Date("2023-01-04")
	},
	{
		text: "Увы, я думаю, что данный кандидат не подходит для нашей компании.",
		date: new Date("2023-05-24")
	},
	{
		text: "Можно ли сделать интервью на следующей неделе?",
		date: new Date("2023-05-12")
	},
	{
		text: "Будем ждать реакции от кандидата на наше предложение",
		date: new Date("2023-04-05")
	},
	{
		text: "Сделаю вам замечание по этому кандидату и мы обсудим его на нашем следующем созвоне.",
		date: new Date("2023-05-09")
	},
	{
		text: "Вы правы, нужно срочно созвониться с этим кандидатом",
		date: new Date("2023-05-11")
	},
	{
		text: "Посмотрим, есть ли у нас подходящие вакансии для этого кандидата",
		date: new Date("2023-05-12")
	},
	{
		text: "Странны кандидат, постоянно переключал вкладки, и ходил по верхам!",
		date: new Date("2023-01-01")
	},
	{
		text: "Кандидат грубил и не вышел на связь в день собеса",
		date: new Date("2023-01-02")
	},
	{
		text: "Все было приемлемо",
		date: new Date("2023-01-03")
	},
];

const vacancyComments: Omit<Comment, '_user'>[] = [
	{
		text: "Отправить запрос на дополнительную информацию об этой вакансии",
		date: new Date("2023-01-01")
	},
	{
		text: "Эта вакансия очень интересна, подумаю над тем, чтобы подать заявку",
		date: new Date("2023-01-02")
	},
	{
		text: "Когда планируется начало работы на данной вакансии?",
		date: new Date("2023-01-03")
	},
	{
		text: "Не подходит для меня этот уровень заработной платы, продолжаю искать другие варианты",
		date: new Date("2023-01-04")
	},
	{
		text: "Что подразумевается под 'опытом работы' в этом описании?",
		date: new Date("2023-05-24")
	},
	{
		text: "Не могу связаться с рекрутером, который бы мог ответить на мои вопросы по вакансии",
		date: new Date("2023-05-12")
	},
	{
		text: "Поставлю еще одну звездочку этой вакансии, очень много перспектив для роста",
		date: new Date("2023-04-05")
	},
	{
		text: "Рекомендую эту вакансию своим знакомым, подходит для профессионалов своего дела",
		date: new Date("2023-05-09")
	},
	{
		text: "Хотелось бы узнать больше о миссии этой компании, это важно для меня",
		date: new Date("2023-05-11")
	},
	{
		text: "Будут обдумывать это предложение, хотя пока еще остаются вопросы по деталям",
		date: new Date("2023-05-12")
	},
	{
		text: "Странны кандидат, постоянно переключал вкладки, и ходил по верхам!",
		date: new Date("2023-01-01")
	},
	{
		text: "Кандидат грубил и не вышел на связь в день собеса",
		date: new Date("2023-01-02")
	},
	{
		text: "Все было приемлемо",
		date: new Date("2023-01-03")
	},
];
