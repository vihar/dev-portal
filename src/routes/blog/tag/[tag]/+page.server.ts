import fetchPosts from '$lib/assets/js/fetchPosts';

export const load = async ({ params }) => {
	const tag = params.tag;
	const options = { tag };
	const { posts } = await fetchPosts(options);

	return {
		posts,
		tag,
		total: posts.length
	};
};
