import { userTransformer } from '../transformers';

export const getUser = async (loginToFind) =>
	fetch(`http://localhost:3005/users?login=${loginToFind}`)
		.then((loadedUser) => loadedUser.json())
		.then(([loadedUser]) => loadedUser && userTransformer(loadedUser));
