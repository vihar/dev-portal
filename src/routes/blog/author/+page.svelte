<script>
	export let data;
	const { uniqueAuthors } = data;
</script>

<svelte:head>
	<title>Blog | Author</title>
</svelte:head>

<div class="compressed-content">
	<h1 class="h2">All authors</h1>

	<ul>
		{#each uniqueAuthors as author}
			<li>
				<a href="/blog/author/{author.title}">
					{author.title}
				</a>
				({author.count})
			</li>
		{/each}
	</ul>
</div>
