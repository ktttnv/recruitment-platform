import mongoose from 'mongoose';

import candidateSchema from './schema';
import { Candidate } from '../typescript/candidate';

const CandidateModel = mongoose.model<Candidate>('Candidate', candidateSchema);

export default CandidateModel;
