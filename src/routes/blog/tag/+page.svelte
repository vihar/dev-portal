<script>
	export let data;
	const { uniqueTags } = data;
</script>

<svelte:head>
	<title>Blog | Tags</title>
</svelte:head>

<div class="bg-white">
	<div class="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
		<div class="space-y-8 sm:space-y-12">
			<div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
				<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Viewing all Blog tags</h2>
				<p class="text-xl text-gray-500">
					Risus velit condimentum vitae tincidunt tincidunt. Mauris ridiculus fusce amet urna nunc.
					Ut nisl ornare diam in.
				</p>
			</div>
			<ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
				{#each uniqueTags as tag}
					<a class="w-100 block" href="/blog/tag/{tag.title}">
						<span class="col-span-1 flex rounded-md shadow-sm">
							<div
								class="flex-shrink-0 flex items-center justify-center w-16 bg-orange-600 text-white text-sm font-medium rounded-l-md uppercase"
							>
								{tag.title.slice(0, 2)}
							</div>
							<div
								class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white"
							>
								<div class="flex-1 truncate px-4 py-2 text-sm">
									<a href="#" class="font-medium text-gray-900 hover:text-gray-600"
										>{tag.title} ({tag.count})</a
									>
								</div>
							</div>
						</span>
					</a>
				{/each}
			</ul>
		</div>
	</div>
</div>
