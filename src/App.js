import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
	font-weight: bold;
	color: red;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	font-size: 24px;
`;

export const App = () => {
	return (
		<div className="App">
			<Div>
				<i className="fa fa-calendar"></i>Test styled component
			</Div>
		</div>
	);
};
