import preprocess from 'svelte-preprocess';

const codespaceName = process.env['CODESPACE_NAME'];
const hmrPort = 24678;

const hmrRemoteHost = codespaceName ? `${codespaceName}-${hmrPort}.githubpreview.dev` : 'localhost';
const hmrRemotePort = codespaceName ? 443 : hmrPort;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			server: {
				hmr: {
					host: hmrRemoteHost,
					port: hmrPort,
					clientPort: hmrRemotePort
				}
			}
		}
	},
};

export default config;
