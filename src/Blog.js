import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Modal } from './Components';
import { Footer } from './Components/Footer/Footer';
import { Authorization, Main, Post, Registration, Users } from './Pages';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';

const AppColumn = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1100px;
	height: 1400px;
	min-height: 100%;
	background-color: #fbf5df;
`;

const Page = styled.div`
	padding: 175px 0;
`;

export const Blog = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');
		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(setUser({ ...currentUserData, roleId: Number(currentUserData.roleId) }));
	}, [dispatch]);

	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="Login" element={<Authorization />} />
					<Route path="Register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post" element={<Post />} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/post/:id/edit" element={<Post />} />
					<Route path="*" element={<div>Error</div>} />
					<Route path="*" element={<div> Error</div>} />
				</Routes>
			</Page>

			<Footer />
			<Modal />
		</AppColumn>
	);
};
