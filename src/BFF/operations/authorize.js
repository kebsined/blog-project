import { getUser } from '../api';
import { sessions } from '../sessions';

export const authorize = async (userAuthLogin, userAuthPassword) => {
	const user = await getUser(userAuthLogin);

	if (!user) {
		return {
			error: 'Такого пользователя не существует!',
			res: null,
		};
	}

	const { id, login, password, roleId } = user;

	if (userAuthPassword !== password) {
		return {
			error: 'Неверный пароль!',
			res: null,
		};
	}

	return {
		error: null,
		res: {
			id,
			login,
			roleId,
			session: sessions.create(user),
		},
	};
};
