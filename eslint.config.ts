import { createJiti } from 'jiti';

const jiti = createJiti(import.meta.url, {
	tsconfigPaths: true,
});

const { combine, defineConfiguration, defineIgnores } = await jiti.import<typeof import('./src/index.ts')>('./src/index.ts');

export default combine(
	defineIgnores({
		extraIgnoredGlobs: ['bin'],
	}),
	defineConfiguration('javascript', {
		overrides: {
			// It's ok here to be explicit
			'sonarjs/no-duplicate-string': 'off',
		},
	}),
	defineConfiguration('browser'),
	defineConfiguration('node'),
	defineConfiguration('jsx'),
	defineConfiguration('json'),
	defineConfiguration('markdown', {
		overrides: {
			// Doesn't respect HTML element indentation
			'markdownlint/md007': 'off',
			'markdownlint/md036': 'off',
			// Doesn't take into account blockquotes with headlines
			'markdownlint/md028': 'off',
		},
	}),
	defineConfiguration('yaml'),
	defineConfiguration('html'),
	defineConfiguration('vitest'),
	defineConfiguration('typescript'),
	defineConfiguration('vue'),
	defineConfiguration('astro'),
	{
		files: ['**/cli/**'],
		rules: {
			// Used intentionally for a better visual output
			'n/no-process-exit': 'off',
			// It's ok in CLIs
			'no-await-in-loop': 'off',
		},
	},
);
