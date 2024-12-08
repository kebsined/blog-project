import styled from 'styled-components';
import { Comment } from './components';
import { Icon } from '../../../../Components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../../../../selectors';
import { useServerRequest } from '../../../../hooks';
import { addCommentAsync } from '../../../../actions';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onNewCommentAdd = (userId, postId, content) => {
		dispatch(addCommentAsync(requestServer, postId, userId, content));
		setNewComment('');
	};

	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					name="comment"
					value={newComment}
					placeholder="Оставьте комментарий...."
					onChange={({ target }) => setNewComment(target.value)}
				/>
				<Icon
					id="fa-paper-plane-o"
					size="25px"
					onClick={() => onNewCommentAdd(postId, userId, newComment)}
					title="Отправить комментарий"
				/>
			</div>
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	display: flex;
	flex-direction: column;
	width: 600px;
	margin: 0 auto;
	& .new-comment {
		display: flex;
		gap: 20px;
		width: 100%;
		textarea {
			width: 550px;
			height: 175px;
			resize: none;
			outline: none;
			border: 1px solid #000;
			font-size: 18px;
			border-radius: 20px;
			padding: 15px;
		}
	}
	/* .comments {
		display: flex;
		border: 1px solid #000;
		width: 32rem;
		align-items: center;
	} */
`;