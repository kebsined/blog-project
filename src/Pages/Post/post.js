import styled from 'styled-components';
import { useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPost } from '../../selectors';
import { Comments, PostContent, PostForm } from './components';
import { useParams, useMatch } from 'react-router-dom';
import { useServerRequest } from '../../hooks';
import { RESET_POST_DATA, loadPostAsync } from '../../actions';

const PostContainer = ({ className }) => {
	const post = useSelector(selectPost);
	const dispatch = useDispatch();
	const params = useParams();
	const isEditing = useMatch('/post/:id/edit');
	const isCreating = useMatch('/post');

	const requestServer = useServerRequest();

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			return;
		}
		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, params.id, requestServer, isCreating]);

	return (
		<div className={className}>
			{isEditing || isCreating ? (
				<PostForm post={post} />
			) : (
				<>
					<PostContent post={post} />
					<Comments comments={post.comments} postId={post.id} />
				</>
			)}
		</div>
	);
};

export const Post = styled(PostContainer)``;
