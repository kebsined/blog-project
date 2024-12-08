export const sessionTransformer = (dbSession) => ({
	user: dbSession.user,
	hash: dbSession.hash,
	id: dbSession.id,
});
