export const load = async ({ url, fetch }) => {
	const postRes = await fetch(`/api/posts.json`);
	const posts = await postRes.json();

	const totalRes = await fetch(`/api/posts/count`);
	const total = await totalRes.json();

	return { posts, total };
};
