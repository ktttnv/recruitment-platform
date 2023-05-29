import { COMMENT } from '../../server/models/utils/routers';
import { Comment, ConnectionCommentEntityEnum } from '../models/Comment';

import Request from './utils/Request';

class CommentService {
    private request;

    constructor() {
        this.request = new Request();
    }

    addComment = async (comment: Comment) => {
        try {
            const result = await this.request.post(`${COMMENT}/new`, { body: { comment } });
            return result.json();
        } catch (error) {
            console.log(`addComment request return error: ${error}`);
            return [];
        }
    };

    getCommentById = async (id: string, entity: ConnectionCommentEntityEnum) => {
        try {
            const result = await this.request.get(`${COMMENT}/${entity}/${id}`);
            return result.json();
        } catch (error) {
            console.log(`getCommentById request return error: ${error}`);
            return [];
        }
    };
}

export { CommentService };
