<!-- Renders any page at /blog/author/* -->
<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	export let data;
</script>

<svelte:head>
	<title>Author: {data.author}</title>
</svelte:head>

{#if data.posts.length}
	<PostsList posts={data.posts} />
	<Pagination currentPage="1" totalPosts={data.total} path="/blog/author/{data.author}/page" />
{:else}
	<p><strong>Ope!</strong> Sorry, couldn't find any posts in the author "{data.author}".</p>

	<p><a href="/blog">Back to blog</a></p>
{/if}
