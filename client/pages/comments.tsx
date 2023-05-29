import React, { useEffect, useState } from 'react';

import useStores from '../hooks/useStores';
import { ConnectionCommentEntityEnum, Comment } from '../models/Comment';
import CommentsComponent from '../components/common/Comments';

export default function CommentsPage() {
    const { commentStore, userStore } = useStores() || {};

    const [comments, setComment] = useState<Comment[]>([]);

    useEffect(() => {
        commentStore?.getCommentById(userStore.userId, ConnectionCommentEntityEnum.USER).then((resivedComments) => {
            setComment(resivedComments);
        });
    }, []);

    return (
        <>
            <p style={{ margin: '0 auto', width: '100%', textAlign: 'center', fontSize: 'xx-large', color: '#003791'}}>Коментарии</p>
            {comments && <CommentsComponent comments={comments}></CommentsComponent>}
        </>
    );
}
