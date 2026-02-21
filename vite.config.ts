import devServer from '@hono/vite-dev-server';
import adapter from '@hono/vite-dev-server/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import honox from 'honox/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import build from '@hono/vite-build/cloudflare-workers'

export default defineConfig({
	plugins: [
    honox({
      islandComponents: {
        islandDir: './app/client/components',
      },
      client: {
        input: [
          './app/client.ts', // the default value -> must be added if input is overridden
          './app/style.css', // add the style file entrypoint
        ],
      },
    }),
    tailwindcss(),
    tsconfigPaths(),
    build(),
		devServer({
			adapter,
		})
	]
});
