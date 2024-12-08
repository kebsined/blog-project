import { addComment, getComments, getPost } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const addPostComment = async (hash, userId, postId, content) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];
	console.log('до проверки доступа');
	const access = await sessions.checkAccess(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещён!',
			res: null,
		};
	}
	console.log('после проверки доступа');
	await addComment(userId, postId, content);
	const post = await getPost(postId);
	const comments = await getComments(postId);

	return {
		error: null,
		res: { ...post, comments },
	};
};
