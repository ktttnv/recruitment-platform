import { makeAutoObservable, runInAction } from 'mobx';
import { Comment, ConnectionCommentEntityEnum } from '../models/Comment';
import { CommentService } from '../services';

export default class CommentStore {
    commentService!: CommentService;

    constructor() {
        makeAutoObservable(this);

        this.commentService = new CommentService();
    }

    async getCommentById(id: string, entity: ConnectionCommentEntityEnum) {
        return this.commentService.getCommentById(id, entity);
    }

    async addComment(comment: Comment) {
        runInAction(async () => {
            await this.commentService.addComment(comment);
        });
    }
}
