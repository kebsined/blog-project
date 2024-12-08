import styled from 'styled-components';
import { Icon } from '../../../../../../Components';

const CommentContainer = ({ className, id, author, content, publishedAt }) => {
	return (
		<div className={className}>
			<div className="comment-block">
				<div className="comment">
					<Icon
						id="fa-user-circle-o"
						size="20px"
						onClick={() => {}}
						title="Отправить комментарий"
					>
						{author}
					</Icon>

					<Icon
						id="fa-calendar-o"
						size="20px"
						onClick={() => {}}
						title="Отправить комментарий"
					>
						{publishedAt}
					</Icon>
				</div>
				<div className="text">{content}</div>
			</div>
			<div className="trash">
				<Icon id="fa-trash-o" size="30px" />
			</div>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	margin-top: 18px;
	display: flex;
	gap: 15px;
	justify-content: space-between;

	.comment-block {
		background-color: #fff;
		display: flex;
		flex-direction: column;
		border: 1px solid #000;
		border-radius: 10px;
		padding: 5px 10px;
		width: 91.5%;
		overflow: hidden;
		overflow-wrap: break-word;
		text-align: justify;
	}
	.comment {
		display: flex;
		justify-content: space-between;
		margin-bottom: 5px;
	}
`;
