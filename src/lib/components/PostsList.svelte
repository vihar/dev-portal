<script>
	export let posts = [];
</script>

<div class="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
	<div class="absolute inset-0">
		<div class="h-1/3 bg-white sm:h-2/3" />
	</div>
	<div class="relative mx-auto max-w-7xl">
		<div class="text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
			<p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque,
				ducimus sed.
			</p>
		</div>
		<div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
			{#each posts as post}
				<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
					<a href="/blog/{post.slug}" rel="external">
						<div class="flex-shrink-0">
							<img class="h-48 w-full object-cover" src={post.coverImage} alt="" />
						</div>
						<div class="flex flex-1 flex-col justify-between bg-white p-6">
							<div class="flex-1">
								<p class="text-sm font-medium text-indigo-600">
									<span class="hover:underline uppercase">{post.categories[0]}</span>
								</p>
								<span class="mt-2 block">
									<p class="text-xl font-semibold text-gray-900">{post.title}</p>
									<p class="mt-3 text-base text-gray-500">
										{post.excerpt}
									</p>
								</span>
							</div>
							<div class="mt-6 flex items-center">
								<div class="flex-shrink-0">
									<a href="/blog/{post.slug}">
										<span class="sr-only">{post.author}</span>
										<img
											class="h-10 w-10 rounded-full"
											src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
										/>
									</a>
								</div>
								<div class="ml-3">
									<p class="text-sm font-medium text-gray-900">
										<a href="/blog/{post.slug}" class="hover:underline">{post.author}</a>
									</p>
									<div class="flex space-x-1 text-sm text-gray-500">
										<time datetime="2020-03-16">Mar 16, 2020</time>
										<span aria-hidden="true">&middot;</span>
										<span>6 min read</span>
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>
