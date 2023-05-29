import mongoose from 'mongoose';

import templateSchema from './schema';
import { Template } from '../typescript/template';

const TemplateModel = mongoose.model<Template>('Template', templateSchema);

export default TemplateModel;
