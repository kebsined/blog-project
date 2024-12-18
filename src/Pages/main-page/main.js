import { useEffect, useMemo, useState } from 'react';
import { useServerRequest } from '../../hooks';
import { PostCard, Pagination, Search } from './components';
import { PAGINATION_LIMIT } from '../../BFF/constants';
import { debounce, getLastPageFromLinks } from './utils';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', searchPhrase, page, PAGINATION_LIMIT).then(
			({ res: { posts, links } }) => {
				setPosts(posts);
				setLastPage(getLastPageFromLinks(links));
			},
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [requestServer, page, shouldSearch]);

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	return (
		<div className={className}>
			<Search onChange={onSearch} searchPhrase={searchPhrase} />
			{posts.length > 0 ? (
				<div className="post-list">
					{posts.map(({ id, title, publishedAt, commentsCount, imageUrl }) => (
						<PostCard
							id={id}
							key={id}
							title={title}
							publishedAt={publishedAt}
							commentsCount={commentsCount}
							imageUrl={imageUrl}
						/>
					))}
				</div>
			) : (
				<div className="no-posts-found">Статьи не найдены</div>
			)}
			{lastPage > 1 && posts.length > 0 && (
				<Pagination page={page} lastPage={lastPage} setPage={setPage} />
			)}
		</div>
	);
};
export const Main = styled(MainContainer)`
	display: flex;
	flex: 1 0 100%;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	Input {
	}
	.post-list {
		padding: 0 0 50px 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 25px;
		place-items: center;
	}
	.no-posts-found {
		text-align: center;
		font-size: 25px;
		margin-top: 50px;
	}
`;
