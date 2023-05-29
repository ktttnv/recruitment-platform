import mongoose from 'mongoose';

import vacancySchema from './schema';
import { Vacancy } from '../typescript/vacancy';

const VacancyModel = mongoose.model<Vacancy>('Vacancy', vacancySchema);

export default VacancyModel;
