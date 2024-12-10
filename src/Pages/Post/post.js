import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPost } from '../../selectors';
import { Comments, PostContent, PostForm } from './components';
import { useParams, useMatch } from 'react-router-dom';
import { useServerRequest } from '../../hooks';
import { loadPostAsync } from '../../actions';

const PostContainer = ({ className }) => {
	const post = useSelector(selectPost);
	const dispatch = useDispatch();
	const params = useParams();
	const isEditing = useMatch('/post/:id/edit');

	const requestServer = useServerRequest();

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, params.id, requestServer]);

	return (
		<div className={className}>
			{isEditing ? (
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
