import styled from 'styled-components';
import { Logo, ControlPannel } from './components';

const Description = styled.div`
	grid-column: 2/3;
	align-self: center;
	justify-self: center;
	font-style: italic;
`;

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Description>
			Веб-технологии <br /> Написание кода <br /> Разбор ошибок
		</Description>
		<ControlPannel />
	</header>
);

export const Header = styled(HeaderContainer)`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	position: fixed;
	top: 0;
	width: 1000px;
	height: 175px;
	padding: 35px 55px;
	box-shadow: 0 5px 20px #000;
	background-color: #fbf5df;
`;
