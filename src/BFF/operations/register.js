import { getUser, addUser } from '../api';
import { sessions } from '../sessions';
export const register = async (userRegLogin, userRegPassword) => {
	const existedUser = await getUser(userRegLogin);
	if (existedUser) {
		return {
			error: 'Такой пользователь уже существует',
			res: null,
		};
	}

	const user = await addUser(userRegLogin, userRegPassword);

	return {
		error: null,
		res: {
			id: user.id,
			login: user.login,
			roleId: user.role_id,
			session: sessions.create(user),
		},
	};
};
