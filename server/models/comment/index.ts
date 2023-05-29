import mongoose from 'mongoose';

import commentSchema from './schema';
import { Comment } from '../typescript/comment';

const CommentModel = mongoose.model<Comment>('Comment', commentSchema);

export default CommentModel;
