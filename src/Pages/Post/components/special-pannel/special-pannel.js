import { Icon } from '../../../../Components';
import styled from 'styled-components';

const SpecialPannelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="date">
				<Icon id="fa-calendar-o" size="25px" className="calendar" />
				<div>{publishedAt}</div>
			</div>
			<div className="operations">
				{editButton}
				<Icon
					id="fa-trash-o"
					size="25px"
					onClick={() => {}}
					title="Удалить статью"
				/>
			</div>
		</div>
	);
};

export const SpecialPannel = styled(SpecialPannelContainer)`
	display: flex;
	justify-content: space-between;
	margin: 20px 0 20px;
	align-items: center;

	.date {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 25px;
		:active {
			transform: none;
		}
	}

	.operations {
		display: flex;
		gap: 30px;
	}
`;
