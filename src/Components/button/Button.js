import styled from 'styled-components';

const ButtonContainer = ({ className, children, width, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	width: ${({ width = '100%' }) => width};
	height: 2rem;
	background-color: #aaa2b8;
	text-decoration: none;
	border-radius: 5rem;
	border: none;
	box-shadow: 0 5px 10px #000;
	font-size: 18px;
	color: #000;
	font-weight: bold;
	&:active {
		transform: scale(0.9);
	}
	&:hover {
		cursor: pointer;
	}
`;
