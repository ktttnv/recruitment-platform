import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Comment } from '../../models/Comment';
import { Template } from '../../models/Template';
import { getFormatingDate } from '../../utils/date';
import { getUserName } from '../../utils/user';

interface CommentsComponentProps {
	comments: Array<Comment | Template>;
	getDisplayName?: (_param: Comment | Template) => string;
};

const CommentsComponent: React.FC<CommentsComponentProps> = (props: CommentsComponentProps) => {
	const { comments, getDisplayName }  = props;

	const getCommentComponent = React.useCallback((comment: Comment) => {
		const date = getFormatingDate(comment.date);
		const user = Array.isArray(comment._user) ? comment._user[0] : comment._user;

		let candidateString = '';

		if (Array.isArray(comment._candidate) && comment._candidate.length) {
			const candidate = Array.isArray(comment._candidate) ? comment._candidate[0] : comment._candidate;

			candidateString = `-> ${getUserName(candidate)}`;
		}

		const displayName = getDisplayName
			? getDisplayName(comment)
			: `[${getFormatingDate(date)}]: ${getUserName(user)} ${candidateString}`
		 
		return (
			<TextField
				id="outlined-multiline-flexible"
				label={displayName}
				defaultValue={comment.text}
				multiline
				InputProps={{
					readOnly: true,
				}}
			/>
		);
	}, []);

	return (
		<Box
		  component="form"
		  sx={{
			'& .MuiTextField-root': { m: 1, width: '100ch' },
		  }}
		  noValidate
		  autoComplete="off"
		>
			{comments.map((comment: Comment) => getCommentComponent(comment))}
		</Box>
	  );
}

export default CommentsComponent;
