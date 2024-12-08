import styled from 'styled-components';
import { H2, Icon } from '../../../../Components';

const PostContentContainer = ({
	className,
	post: { id, title, content, publishedAt, imageUrl },
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt="post img" />
			<H2>{title}</H2>
			<div className="special-pannel">
				<div className="date">
					<Icon id="fa-calendar-o" size="25px" className="calendar" />
					<div>{publishedAt}</div>
				</div>
				<div className="operations">
					<Icon
						id="fa-pencil-square-o"
						size="25px"
						onClick={() => {}}
						title="Редактировать статью"
					/>
					<Icon
						id="fa-trash-o"
						size="25px"
						onClick={() => {}}
						title="Удалить статью"
					/>
				</div>
			</div>
			<div>{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	margin: 50px 50px 25px 50px;
	text-align: justify;
	img {
		float: left;
		margin: 0 20px 10px 0;
		border-radius: 2rem;
		box-shadow: 0 0 30px 5px #000;
	}
	H2 {
		font-size: 35px;
		margin-bottom: 10px;
		text-decoration: underline;
	}
	.special-pannel {
		display: flex;
		justify-content: space-between;
		margin-bottom: 30px;
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
	}
`;
