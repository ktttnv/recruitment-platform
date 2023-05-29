import mongoose from 'mongoose';

import Candidate from '../../models/typescript/candidate';
import CandidateModel from '../../models/candidate';
import SkillModel from '../../models/skill';

import ObjectId = mongoose.Types.ObjectId;

export async function add(candidate: Candidate) {
    try {
        const newCandidate = new CandidateModel(candidate);

        return newCandidate.save();
    } catch (error) {
        console.log(`Error occured during calling add candidate, error: ${error}`);
        throw error;
    }
}

export async function getAll() {
    return CandidateModel.aggregate([
        {
            $lookup: {
                from: SkillModel.collection.name,
                localField: '_skills',
                foreignField: '_id',
                as: '_skills',
        }},
    ]);
}

export async function getById(candidateId: string) {
    const id = new ObjectId(candidateId);

    return CandidateModel.aggregate(
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

export async function updateById(candidateId: string, updatedCandidate: Candidate) {
    try {
        const id = new ObjectId(candidateId);

        return CandidateModel.findOneAndUpdate(
            { _id: id },
            {
                $set: updatedCandidate,
            }
        );
    } catch (error) {
        console.log(`Error occured during updating candidate function, error: ${error}`);
        throw error;
    }
}

export async function updateCVById(candidateId: string, fileExtname: string) {
    try {
        const id = new ObjectId(candidateId);

        return CandidateModel.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    cvExt: fileExtname,
                },
            }
        );
    } catch (error) {
        console.log(`Error occured during updating candidate's cv function, error: ${error}`);
        throw error;
    }
}
