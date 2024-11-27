import { addUser } from './createUser';
import { getUser } from './getUser';
import { sessions } from './sessions';

export const server = {
	async logout(session) {
		sessions.remove(session);
	},

	async authorize(userAuthLogin, userAuthPassword) {
		const user = await getUser(userAuthLogin);

		if (!user) {
			return {
				error: 'User is invalid!',
				res: null,
			};
		}

		if (userAuthPassword !== user.password) {
			return {
				error: 'Password is invalid!',
				res: null,
			};
		}

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
	async register(userRegLogin, userRegPassword) {
		const existedUser = await getUser(userRegLogin);
		if (existedUser) {
			return {
				error: 'Такой пользователь уже существует',
				res: null,
			};
		}

		const user = await addUser(userRegLogin, userRegPassword);
		console.log(user);

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
};
