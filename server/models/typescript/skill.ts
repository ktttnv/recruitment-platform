import mongoose from 'mongoose';

type ISkill = {
    _id?: mongoose.Types.ObjectId;
    name: string;
    description?: string;
};

export type Skill = ISkill;
export default Skill;
