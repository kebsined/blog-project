import styled from 'styled-components';

const WeatherContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const WeatherInfo = styled(WeatherContainer)`
	font-size: 18px;
	font-style: italic;
`;
