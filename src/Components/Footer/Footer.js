import styled from 'styled-components';

const FooterContainer = ({ className }) => <footer className={className}>FOOTER</footer>;

export const Footer = styled(FooterContainer)`
	height: 175px;
	box-shadow: 0 0 30px #000;
`;
