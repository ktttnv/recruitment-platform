import mongoose from 'mongoose';

import Vacancy from '../../models/typescript/vacancy';
import VacancyModel from '../../models/vacancy';

import ObjectId = mongoose.Types.ObjectId;
import SkillModel from '../../models/skill/index';

const VACANCY_AREA = 'vacancy';

export async function getAll() {
    return VacancyModel.find();
}

export async function add(vacancy: Vacancy) {
    try {
        const newVacancy = new VacancyModel(vacancy);

        return newVacancy.save();
    } catch (error) {
        console.log(`Error occured during ${VACANCY_AREA} ${add.name} function, error: ${error}`);
        throw error;
    }
}

export async function getById(vacancyId: string) {
    const id = new ObjectId(vacancyId);

    return VacancyModel.aggregate(
		[
			{
				$match: {
					_id: id,
				},
			},
			{
				$lookup: {
					from: SkillModel.collection.name,
					localField: '_skills',
					foreignField: '_id',
					as: '_skills',
			}},
		]
    );
}

export async function updateById(vacancyId: string, updatedVacancy: Vacancy) {
    try {
        const id = new ObjectId(vacancyId);

        return VacancyModel.findOneAndUpdate(
            { _id: id },
            {
                $set: updatedVacancy,
            }
        );
    } catch (error) {
        console.log(`Error occured during ${VACANCY_AREA} ${updateById.name} function, error: ${error}`);
        throw error;
    }
}
