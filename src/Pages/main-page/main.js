import { Input } from '../../Components';
import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import { PostCard } from './components/post-card/post-card';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts').then((posts) => {
			setPosts(posts.res);
		});
	}, [requestServer]);

	return (
		<div className={className}>
			<Input width="400px" />
			<div className="post-list">
				{posts.map(({ id, title, publishedAt, commentsCount, imageUrl }) => (
					<PostCard
						key={id}
						id={id}
						title={title}
						publishedAt={publishedAt}
						commentsCount={commentsCount}
						imageUrl={imageUrl}
					/>
				))}
			</div>
		</div>
	);
};
export const Main = styled(MainContainer)`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	Input {
	}
	.post-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 25px;
		place-items: center;
	}
`;
