import { ROLE } from '../constants';
import { removeComment } from './sessions';

export const createSession = (roleId) => {
	const session = {
		logout() {
			Object.keys(session).forEach((key) => delete session[key]);
		},
	};

	switch (roleId) {
		case ROLE.ADMIN: {
			session.removeComment = removeComment();
			break;
		}
		case ROLE.MODERATOR: {
			session.removeComment = removeComment();
			break;
		}
		case ROLE.READER: {
			break;
		}
		default:
		//nothing to do
	}
	return session;
};