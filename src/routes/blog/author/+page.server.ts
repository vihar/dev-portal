export const load = async ({ url, fetch }) => {
	const res = await fetch(`${url.origin}/api/posts.json`);
	let posts = await res.json();

	console.log(posts);

	let uniqueAuthors = {};

	posts.forEach((post) => {
		if (uniqueAuthors.hasOwnProperty(post.author)) {
			uniqueAuthors[post.author].count += 1;
		} else {
			uniqueAuthors[post.author] = {
				title: post.author,
				count: 1
			};
		}
	});
	console.log(uniqueAuthors);

	const sorteduniqueAuthors = Object.values(uniqueAuthors).sort((a, b) => a.title > b.title);

	return {
		uniqueAuthors: sorteduniqueAuthors
	};
};
