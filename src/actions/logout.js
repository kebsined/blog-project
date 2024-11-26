import { server } from '../BFF';
import { ACTION_TYPE } from './action-types';

export const logout = (session) => {
	server.logout(session);
	return {
		type: ACTION_TYPE.LOGOUT,
	};
};
