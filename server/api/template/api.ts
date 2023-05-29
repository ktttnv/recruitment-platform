import mongoose from 'mongoose';

import Template from '../../models/typescript/template';
import TemplateModel from '../../models/templates';

import ObjectId = mongoose.Types.ObjectId;

export async function getAll(userId: string) {
    const id = new ObjectId(userId);

    return TemplateModel.find({
        _user: id,
    });
}

export async function add(template: Template) {
    try {
        const newTemplate = new TemplateModel(template);

        return newTemplate.save();
    } catch (error) {
        console.log(`Error occured during calling add template function, error: ${error}`);
        throw error;
    }
}
