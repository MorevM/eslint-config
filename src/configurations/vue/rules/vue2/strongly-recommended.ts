import { pluginVue } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		vue: pluginVue,
	},
	rules: {
		// Require `emits` option with name triggered by `$emit()`
		// https://eslint.vuejs.org/rules/require-explicit-emits.html
		// Note: this is an option for `Vue3`, but works with `Vue2` as well
		'vue/require-explicit-emits': ['warn', {
			allowProps: false,
		}],

		// Enforce v-on event naming style on custom components in template
		// (autofixable but in `Vue2` kebab-case and camelCase events are different)
		// https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
		// Note: this is an option for `Vue3`, but works with `Vue2` as well
		'no-autofix/vue/v-on-event-hyphenation': ['warn', 'always', {
			autofix: false,
		}],
	},
});
