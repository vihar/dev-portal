import { redirect } from '@sveltejs/kit';
import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/assets/js/fetchPosts';

export const load = async ({ url, params, fetch }: any) => {
	const page = Number.isFinite(params.page) ? params.page : 1;
	const { author } = params;

	// Prevents duplication of page 1 as the index page
	if (page <= 1) {
		throw redirect(301, `/blog/author/${author}`);
	}

	let offset = page * postsPerPage - postsPerPage;

	const totalPostsRes = await fetch(`${url.origin}/api/posts/count`);
	const total = await totalPostsRes.json();
	const { posts } = await fetchPosts({ offset, page });

	return {
		posts,
		page,
		author,
		totalPosts: total
	};
};
