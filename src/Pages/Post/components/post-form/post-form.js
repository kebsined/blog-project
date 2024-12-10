import { useRef } from 'react';
import { Input, Icon } from '../../../../Components';
import { SpecialPannel } from '../special-pannel/special-pannel';
import styled from 'styled-components';
import { sanitizeContent } from './utils';
import { useDispatch } from 'react-redux';
import { savePostAsync } from '../../../../actions';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../../../../hooks';

const PostFormContainer = ({
	className,
	post: { id, title, content, publishedAt, imageUrl },
}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const requestServer = useServerRequest();

	const onSave = () => {
		const newImageUrl = imageRef.current.value;
		const newTitle = titleRef.current.value;
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			savePostAsync(requestServer, {
				id,
				imageUrl: newImageUrl,
				title: newTitle,
				content: newContent,
			}),
		).then(() => navigate(`/post/${id}`));
	};
	return (
		<div className={className}>
			<Input
				ref={imageRef}
				defaultValue={imageUrl}
				placeholder="Ссылка на зображение..."
			/>
			<Input ref={titleRef} defaultValue={title} placeholder="Название статьи..." />
			<SpecialPannel
				publishedAt={publishedAt}
				margin="20px 0"
				editButton={
					<Icon
						id="fa-floppy-o"
						size="25px"
						onClick={onSave}
						title="Редактировать статью"
					/>
				}
			/>
			<div
				ref={contentRef}
				contentEditable="true"
				suppressContentEditableWarning="true"
				className="post-text"
			>
				{content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	margin: 50px 50px 25px 50px;
	text-align: justify;
	.post-text {
		white-space: pre-line;
	}
	img {
		float: left;
		margin: 0 20px 10px 0;
		border-radius: 2rem;
		box-shadow: 0 0 30px 5px #000;
	}
`;
