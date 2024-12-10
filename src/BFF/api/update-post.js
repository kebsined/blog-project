export const updatePost = ({ id, imageUrl, content, title }) =>
	fetch(`http://localhost:3005/posts/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			image_url: imageUrl,
			content,
			title,
		}),
	}).then((loadedPost) => loadedPost.json());
