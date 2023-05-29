import mongoose from 'mongoose';

import skillSchema from './schema';
import { Skill } from '../typescript/skill';

const SkillModel = mongoose.model<Skill>('Skill', skillSchema);

export default SkillModel;
