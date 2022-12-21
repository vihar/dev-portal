<script>
	import { siteTitle } from '$lib/config';
</script>

<header class="bg-orange-600">
	<nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
		<div
			class="flex w-full items-center justify-between border-b border-orange-500 py-3 lg:border-none"
		>
			<div class="flex items-center">
				<a href="/">
					<span class="sr-only">Your Company</span>
					<img
						class="h-5 w-auto"
						src="https://res.cloudinary.com/theappsmith/image/upload/v1671607967/Appsmith_White_logo_jn8mew.svg"
						alt=""
					/>
				</a>
				<div class="ml-10 hidden space-x-8 lg:block">
					<a
						href="/blog"
						class="text-base font-medium text-white hover:text-indigo-50"
						rel="external">Blog</a
					>
					<a
						href="https://docs.appsmith.com"
						class="text-base font-medium text-white hover:text-indigo-50">Docs</a
					>

					<a href="/" class="text-base font-medium text-white hover:text-indigo-50">Discord</a>
				</div>
			</div>
			<div class="ml-10 space-x-4">
				<a
					href="https://github.com/appsmithorg/appsmith"
					class="inline-block rounded-md border border-transparent bg-orange-500 py-1 px-3 text-sm font-medium text-white hover:bg-opacity-75"
					>Contribute</a
				>
				<a
					href="/"
					class="inline-block rounded-md border border-transparent bg-white py-1 px-3 text-sm font-medium text-orange-600 hover:bg-orange-50"
					>Admin Panel</a
				>
			</div>
		</div>
		<div class="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
			<a href="/blog" class="text-base font-medium text-white hover:text-indigo-50">Blog</a>

			<a
				href="https://docs.appsmith.com"
				class="text-base font-medium text-white hover:text-indigo-50">Docs</a
			>

			<a href="/" class="text-base font-medium text-white hover:text-indigo-50">Discord</a>
		</div>
	</nav>
</header>
