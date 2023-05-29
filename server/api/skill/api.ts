import Skill from '../../models/typescript/skill';
import SkillModel from '../../models/skill';

export async function getAll() {
    return SkillModel.find();
}

export async function add(skill: Skill) {
    try {
        const newSkill = new SkillModel(skill);

        return newSkill.save();
    } catch (error) {
        console.log(`Error occured during calling add skill function, error: ${error}`);
        throw error;
    }
}
