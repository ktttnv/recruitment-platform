import mongoose from 'mongoose';

import Task from '../../server/models/typescript/task';
import User from '../../server/models/typescript/user';

import ObjectId = mongoose.Types.ObjectId;

export function getTasksData(users: User[]): Task[] {
	return users.map((user: User) => {
		return tasks.map((task) => {
			return {
				...task,
				_user: new ObjectId(user._id),
			} as Task;
		});
	}).flat();
}

const tasks: Omit<Task, '_user'>[] = [
	{
		text: "Просмотреть резюме",
		isDone: false,
		date: new Date("2023-01-01"),
	},
	{
		text: "Написать письмо соискателю",
		isDone: true,
		date: new Date("2022-01-02"),
	},
	{
		text: "Провести интервью по телефону",
		isDone: true,
		date: new Date("2022-01-03"),
	},
	{
		text: "Отправить документы в отдел кадров",
		isDone: false,
		date: new Date("2022-01-04"),
	},
	{
		text: "Провести личное интервью с соискателем",
		isDone: false,
		date: new Date("2022-01-05"),
	},
	{
		text: "Проверить подтверждение на работу",
		isDone: false,
		date: new Date("2022-01-06"),
	},
	{
		text: "Изучить профиль соискателя в социальных сетях",
		isDone: true,
		date: new Date("2022-01-07"),
	},
	{
		text: "Обновить базу данных соискателей",
		isDone: true,
		date: new Date("2022-01-08"),
	},
	{
		text: "Подготовить отчет о ходе набора персонала",
		isDone: false,
		date: new Date("2022-01-09"),
	},
	{
		text: "Разместить объявление о вакансии",
		isDone: false,
		date: new Date("2022-01-10"),
	},
	{
		text: "Проверить референсы соискателя",
		isDone: true,
		date: new Date("2022-01-11"),
	},
	{
		text: "Составить список вопросов для интервью",
		isDone: true,
		date: new Date("2022-01-12"),
	},
	{
		text: "Провести интервью на должность менеджера по продажам",
		isDone: false,
		date: new Date("2022-01-13"),
	},
	{
		text: "Отправить приглашение на интервью",
		isDone: false,
		date: new Date("2022-01-14"),
	},
	{
		text: "Ознакомиться со списком соискателей на собеседование",
		isDone: true,
		date: new Date("2022-01-15"),
	},
	{
		text: "Проверить профиль компании соискателя",
		isDone: true,
		date: new Date("2022-01-16"),
	},
	{
		text: "Связаться с кандидатом для уточнения деталей",
		isDone: false,
		date: new Date("2022-01-17"),
	},
	{
		text: "Создать базу данных вопросов интервью",
		isDone: true,
		date: new Date("2022-01-18"),
	},
	{
		text: "Определиться с размером оклада для нового сотрудника",
		isDone: false,
		date: new Date("2022-01-19"),
	},
	{
		text: "Оформить документы для нового сотрудника",
		isDone: false,
		date: new Date("2022-01-20"),
	},
	{
		text: "Просмотреть резюме",
		isDone: false,
		date: new Date("2023-05-28"),
	},
	{
		text: "Написать письмо соискателю",
		isDone: true,
		date: new Date("2023-05-28"),
	},
	{
		text: "Провести интервью по телефону",
		isDone: true,
		date: new Date("2023-05-28"),
	},
	{
		text: "Отправить документы в отдел кадров",
		isDone: false,
		date: new Date("2023-05-28"),
	},
	{
		text: "Провести личное интервью с соискателем",
		isDone: false,
		date: new Date("2023-05-28"),
	},
	{
		text: "Проверить подтверждение на работу",
		isDone: false,
		date: new Date("2023-05-28"),
	},
	{
		text: "Изучить профиль соискателя в социальных сетях",
		isDone: true,
		date: new Date("2022-01-07"),
	},
	{
		text: "Обновить базу данных соискателей",
		isDone: true,
		date: new Date("2023-05-28"),
	},
	{
		text: "Подготовить отчет о ходе набора персонала",
		isDone: false,
		date: new Date("2023-05-28"),
	},
	{
		text: "Разместить объявление о вакансии",
		isDone: false,
		date: new Date("2022-01-10"),
	},
	{
		text: "Проверить референсы соискателя",
		isDone: true,
		date: new Date("2023-05-28"),
	},
	{
		text: "Составить список вопросов для интервью",
		isDone: true,
		date: new Date("2023-05-28"),
	},
	{
		text: "Провести интервью на должность менеджера по продажам",
		isDone: false,
		date: new Date("2023-05-28"),
	},
	{
		text: "Отправить приглашение на интервью",
		isDone: false,
		date: new Date("2023-05-28"),
	},
	{
		text: "Ознакомиться со списком соискателей на собеседование",
		isDone: true,
		date: new Date("2023-05-28"),
	},
	{
		text: "Проверить профиль компании соискателя",
		isDone: true,
		date: new Date("2023-05-28"),
	},
	{
		text: "Связаться с кандидатом для уточнения деталей",
		isDone: false,
		date: new Date("2023-05-28"),
	},
	{
		text: "Создать базу данных вопросов интервью",
		isDone: true,
		date: new Date("2023-05-29"),
	},
	{
		text: "Определиться с размером оклада для нового сотрудника",
		isDone: false,
		date: new Date("2023-05-29"),
	},
	{
		text: "Оформить документы для нового сотрудника",
		isDone: false,
		date: new Date("2023-05-29"),
	},
	{
		text: "Просмотреть резюме",
		isDone: false,
		date: new Date("2023-05-29"),
	},
	{
		text: "Написать письмо соискателю",
		isDone: true,
		date: new Date("2023-05-29"),
	},
	{
		text: "Провести интервью по телефону",
		isDone: true,
		date: new Date("2023-05-29"),
	},
	{
		text: "Отправить документы в отдел кадров",
		isDone: false,
		date: new Date("2023-05-29"),
	},
	{
		text: "Провести личное интервью с соискателем",
		isDone: false,
		date: new Date("2023-05-30"),
	},
	{
		text: "Проверить подтверждение на работу",
		isDone: false,
		date: new Date("2023-05-30"),
	},
	{
		text: "Изучить профиль соискателя в социальных сетях",
		isDone: true,
		date: new Date("2022-01-30"),
	},
	{
		text: "Обновить базу данных соискателей",
		isDone: true,
		date: new Date("2023-05-30"),
	},
	{
		text: "Подготовить отчет о ходе набора персонала",
		isDone: false,
		date: new Date("2023-05-30"),
	},
	{
		text: "Разместить объявление о вакансии",
		isDone: false,
		date: new Date("2022-01-30"),
	},
	{
		text: "Проверить референсы соискателя",
		isDone: true,
		date: new Date("2023-05-30"),
	},
	{
		text: "Составить список вопросов для интервью",
		isDone: true,
		date: new Date("2023-05-30"),
	},
	{
		text: "Провести интервью на должность менеджера по продажам",
		isDone: false,
		date: new Date("2023-05-30"),
	},
	{
		text: "Отправить приглашение на интервью",
		isDone: false,
		date: new Date("2023-05-30"),
	},
	{
		text: "Ознакомиться со списком соискателей на собеседование",
		isDone: true,
		date: new Date("2023-05-30"),
	},
	{
		text: "Проверить профиль компании соискателя",
		isDone: true,
		date: new Date("2023-05-30"),
	},
	{
		text: "Связаться с кандидатом для уточнения деталей",
		isDone: false,
		date: new Date("2023-05-30"),
	},
	{
		text: "Создать базу данных вопросов интервью",
		isDone: true,
		date: new Date("2023-05-30"),
	},
	{
		text: "Определиться с размером оклада для нового сотрудника",
		isDone: false,
		date: new Date("2023-05-30"),
	},
	{
		text: "Оформить документы для нового сотрудника",
		isDone: false,
		date: new Date("2023-05-30"),
	},
];
