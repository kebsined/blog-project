import { toGenerateDate } from './generateDate';

export const addUser = (login, password) => {
	fetch('http://localhost:3005/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset-utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			registered_at: toGenerateDate(),
			role_id: 2,
		}),
	});
};
