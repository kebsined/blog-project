import { deleteComment, getComments, getPost } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const removePostComment = async (hash, id, postId) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

	const access = await sessions.checkAccess(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещён!',
			res: null,
		};
	}
	await deleteComment(id);
	const post = await getPost(postId);
	const comments = await getComments(postId);

	return {
		error: null,
		res: { ...post, comments },
	};
};
