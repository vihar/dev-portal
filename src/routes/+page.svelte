<script>
	import Giscus from '@giscus/svelte';
	import { siteTitle } from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<!-- This is the README.md file in the root of the repo. It serves double duty as the homepage's content. If you'd rather use your own HTML and/or Svelte, you can delete/modify everything in this file. -->
<svelte:component this={data.ReadMe} />

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
