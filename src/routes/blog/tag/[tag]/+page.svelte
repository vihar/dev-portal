<!-- Renders any page at /blog/tag/* -->
<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	export let data;

	console.log(data);
</script>

<svelte:head>
	<title>Tag: {data.tag}</title>
</svelte:head>

<h1>Blog tag: {data.tag}</h1>

{#if data.posts.length}
	<PostsList posts={data.posts} />
	<Pagination currentPage="1" totalPosts={data.total} path="/blog/tag/{data.tag}/page" />
{:else}
	<p><strong>Ope!</strong> Sorry, couldn't find any posts in the tag "{data.tag}".</p>

	<p><a href="/blog">Back to blog</a></p>
{/if}
