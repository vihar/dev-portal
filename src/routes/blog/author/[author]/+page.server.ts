import fetchPosts from '$lib/assets/js/fetchPosts';

export const load = async ({ params }: any) => {
	const author = params.author;
	const options = { author };
	const { posts } = await fetchPosts(options);

	return {
		posts,
		author,
		total: posts.length
	};
};
