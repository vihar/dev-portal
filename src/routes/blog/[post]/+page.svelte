<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	import Giscus from '@giscus/svelte';

	export let data;

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
		data.meta;
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<div class="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
	<article class="post">
		<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
		<img
			class="w-full max-w-full h-auto"
			src={coverImage}
			alt=""
			style="aspect-ratio: {coverWidth} / {coverHeight};"
			width={coverWidth}
			height={coverHeight}
		/>

		<h1>{title}</h1>

		<div class="meta">
			<b>Published:</b>
			{date}
			<br />
			<b>Updated:</b>
			{updated}
		</div>

		{@html data.PostContent}

		{#if categories}
			<aside class="post-footer">
				<h2>Posted in:</h2>
				<ul>
					{#each categories as category}
						<li>
							<a href="/blog/category/{category}/">
								{category}
							</a>
						</li>
					{/each}
				</ul>
			</aside>
		{/if}
	</article>

	<div class="comments-container">
		<Giscus
			id="comments"
			repo="vihar/dev-portal"
			repoId="R_kgDOIiVQuA"
			category="Q&A"
			categoryId="DIC_kwDOIiVQuM4CS2hC"
			mapping="url"
			term="Welcome to @giscus/svelte component!"
			reactionsEnabled="1"
			emitMetadata="0"
			inputPosition="top"
			theme="light"
			lang="en"
		/>
	</div>
</div>
