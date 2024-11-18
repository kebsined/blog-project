import { createSession } from './createSession';
import { createUser } from './createUser';
import { getUser } from './getUser';

const server = {
	async auth(userAuthLogin, userAuthPassword) {
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
			res: createSession(user.role_id),
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

		await createUser(userRegLogin, userRegPassword);

		return {
			error: null,
			res: createSession(user.role_id),
		};
	},
};
