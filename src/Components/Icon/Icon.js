import styled from 'styled-components';
const IconContainer = ({ className, id }) => (
	<div className={className}>
		<i className={`fa ${id} `} aria-hidden="true"></i>
	</div>
);
export const Icon = styled(IconContainer)`
	font-size: ${({ size = '24px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	text-shadow: ${({ textShadow = '0 4px 5px #000000ce' }) => textShadow};
	color: #000;
	text-decoration: none;
`;
