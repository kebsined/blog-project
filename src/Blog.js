import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './Components';
import { Footer } from './Components/Footer/Footer';
import { Authorization } from './Pages';

const AppColumn = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	background-color: #fbf5df;
	height: 3000px;
`;

const Content = styled.div`
	padding: 175px 0;
`;

export const Blog = () => {
	return (
		<AppColumn>
			<Header />
			<Content>
				<Routes>
					<Route path="/" element={<div>Main Page</div>} />
					<Route path="Login" element={<Authorization />} />
					<Route path="Register" element={<div>Registration</div>} />
					<Route path="/users" element={<div>Users</div>} />
					<Route path="/post" element={<div>New Post</div>} />
					<Route path="/post/:postId" element={<div> Post</div>} />
					<Route path="*" element={<div>Error</div>} />
					<Route path="*" element={<div> Error</div>} />
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
};
