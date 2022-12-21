<script>
	export let data;
	const { uniqueTags } = data;
</script>

<svelte:head>
	<title>Blog | Tags</title>
</svelte:head>

<div class="compressed-content">
	<h1 class="h2">All blog tags</h1>

	<ul>
		{#each uniqueTags as tag}
			<li>
				<a href="/blog/tag/{tag.title}">
					{tag.title}
				</a>
				({tag.count})
			</li>
		{/each}
	</ul>
</div>
