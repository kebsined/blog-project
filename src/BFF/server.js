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
		const user = await getUser(userRegLogin);
		if (user) {
			return {
				error: 'This login is already occupied',
				res: null,
			};
		}

		await addUser(userRegLogin, userRegPassword);

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
