import { defineConfig } from 'tsdown';

export default defineConfig({
	sourcemap: false,
	clean: true,
	target: 'esnext',
	format: ['esm'],
	dts: true,
	entry: {
		index: './src/index.ts',
		plugins: './src/plugins.ts',
		parsers: './src/parsers.ts',
		globs: './src/globs.ts',
		cli: './src/cli/index.ts',
	},
});
