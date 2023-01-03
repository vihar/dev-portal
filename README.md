# Sveltekit Dev Blog Starter

This starter contains everything you need to get up and running with SvelteKit as a static site generator for your Markdown (and Svelte)-powered blog. Check out the demo [here](https://dev-portal-lovat.vercel.app/), or view the GitHub repo [here](https://github.com/vihar/dev-portal).

### Features

📦 Zero-config preloading for automatic, fast background preloading of all top-level pages
✍️ Markdown support with a pre-configured blog
📑 Pagination included (can customize posts per page)
✅ Category pages included
💬 Posts JSON API
💅 Sass pre-installed and -configured
📝 mdsvex pre-installed--use Svelte components inside Markdown!
🔗 Rehype plugins are included to generate unique heading IDs, for direct linking
📱 Responsive and accessible defaults; includes a "skip to content" link and accessible mobile nav menu

### Quick Start

Clone or download this repo, then install the dependencies and run the dev server:

```
npx degit https://github.com/vihar/dev-portal my-sveltekit-blog
cd my-sveltekit-blog
npm install
npm run dev -- --open
```

That should get a dev server up and running (assuming you have npm and Node installed already). Any saved changes to components and styles should auto-refresh blazingly fast.

Now all you need to do is:

- Update the `src/lib/config.js` file
- Drop your Markdown posts into `content/blogs`
- Optionally, customize the styles in lib/assets/scss

### Building and deploying

The build command (from package.json) is simply:

```
npm run build
```

That should do it on a host like Netlify or Vercel. Or, if you prefer, you can run npm run build to generate the static files, then upload those (they'll be generated into a build folder).

Use npm run preview after a build to preview the built site.

### Deploy your own

Deploy the example using Vercel:

Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vihar/dev-portal&project-name=dev-blog&repository-name=dev-blog)
