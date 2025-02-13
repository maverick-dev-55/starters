import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-node';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),
  
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: adapter({ out: "out" }),
    // target: "#svelte",
  },
};

export default config;
