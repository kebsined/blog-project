import { Icon } from '../../../../Components';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RigthAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 20px;
`;

const Button = styled.button`
	width: 8.5rem;
	height: 2rem;
	background-color: #aaa2b8;
	text-decoration: none;
	border-radius: 5rem;
	border: none;
	box-shadow: 0 5px 20px #000;
	font-size: 18px;
	color: #000;
	font-weight: bold;
`;

const ControlPannelContainer = ({ className }) => {
	const navigate = useNavigate();
	return (
		<div className={className}>
			<RigthAligned>
				<Link to="Login">
					<Button>Войти</Button>
				</Link>
			</RigthAligned>
			<RigthAligned>
				<div onClick={() => navigate(-1)}>
					<Icon
						id="fa-angle-double-left"
						size="45px"
						textShadow="0 4px 5px #000000ce"
					/>
				</div>
				<Link to="/post">
					<Icon
						id="fa-file-text"
						size="35px"
						textShadow="0 4px 5px #000000ce"
					/>
				</Link>
				<Link to="/users">
					<Icon id="fa-users" size="35px" textShadow="0 4px 5px #000000ce" />
				</Link>
			</RigthAligned>
			<div></div>
		</div>
	);
};

export const ControlPannel = styled(ControlPannelContainer)``;
