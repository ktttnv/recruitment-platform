import mongoose from 'mongoose';

import Comment from '../../models/typescript/comment';
import CommentModel from '../../models/comment';
import UserModel from '../../models/user';
import CandidateModel from '../../models/candidate';

import ObjectId = mongoose.Types.ObjectId;

export async function add(comment: Comment) {
    try {
        const newComment = new CommentModel(comment);

        return newComment.save();
    } catch (error) {
        console.log(`Error occured during calling add comment function, error: ${error}`);
        throw error;
    }
}

export async function getUserCommentsById(userId: string) {
    const id = new ObjectId(userId);

    return CommentModel.aggregate(
		[
			{
				$match: {
					_user: id,
				},
			},
			{
				$lookup: {
					from: UserModel.collection.name,
					localField: '_user',
					foreignField: '_id',
					as: '_user',
			}},
            {
				$lookup: {
					from: CandidateModel.collection.name,
					localField: '_candidate',
					foreignField: '_id',
					as: '_candidate',
			}},
		]
    );
}

export async function getCandidateCommentsById(candidateId: string) {
    const id = new ObjectId(candidateId);

    return CommentModel.aggregate(
		[
			{
				$match: {
					_candidate: id,
				},
			},
			{
				$lookup: {
					from: UserModel.collection.name,
					localField: '_user',
					foreignField: '_id',
					as: '_user',
			}},
		]
    );
}

export async function getVacancyCommentsById(vacancyId: string) {
    const id = new ObjectId(vacancyId);

    return CommentModel.aggregate(
		[
			{
				$match: {
					_vacancy: id,
				},
			},
			{
				$lookup: {
					from: UserModel.collection.name,
					localField: '_user',
					foreignField: '_id',
					as: '_user',
			}},
            {
				$lookup: {
					from: CandidateModel.collection.name,
					localField: '_candidate',
					foreignField: '_id',
					as: '_candidate',
			}},
		]
    );
}
