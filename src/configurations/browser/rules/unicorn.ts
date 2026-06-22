import { pluginUnicorn } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		unicorn: pluginUnicorn,
	},
	rules: {
		// Prefer better DOM traversal APIs
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-dom-traversing.md
		// Reason: too broad and not configurable per DOM traversal pattern
		'unicorn/better-dom-traversing': 'off',

		// Disallow unnecessary `Blob` to `File` conversion
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-blob-to-file.md
		// Note: reports as `warn` because this is a narrow cleanup suggestion with manual fixes
		'unicorn/no-blob-to-file': 'warn',

		// Disallow incorrect `querySelector()` and `querySelectorAll()` usage (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-incorrect-query-selector.md
		// Note: reports as `warn` because it mixes correctness fixes with efficiency cleanups
		'unicorn/no-incorrect-query-selector': 'warn',

		// Disallow invalid `accept` values on file inputs (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-file-input-accept.md
		// Note: reports as `warn` because `accept` is a picker hint and some fixes are normalization
		'unicorn/no-invalid-file-input-accept': 'warn',

		// Disallow accessing `event.currentTarget` after the synchronous event dispatch has finished
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-late-current-target-access.md
		// Note: reports as `warn` because it catches real late-access bugs but can flag synchronous nested functions
		'unicorn/no-late-current-target-access': 'warn',

		// Prefer drawing canvases directly instead of converting them to images
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-canvas-to-image.md
		// Reason: syntax-based check may report intentional canvas conversions
		'unicorn/no-canvas-to-image': 'off',

		// Disallow unsafe DOM HTML APIs.
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-dom-html.md
		// Reason: raw HTML sinks are usually deliberate.
		'unicorn/no-unsafe-dom-html': 'off',

		// Prefer `.addEventListener()` and `.removeEventListener()` over on-functions (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener.md
		// Doesn't set removeEventListener, so may be confusing to disable it
		'no-autofix/unicorn/prefer-add-event-listener': 'off',

		// Prefer using `Element#classList.toggle()` to toggle class names (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-classlist-toggle.md
		'unicorn/prefer-classlist-toggle': 'warn',

		// Prefer `Node#append()` over `Node#appendChild()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-append.md
		'unicorn/prefer-dom-node-append': 'warn',

		// Enforce consistent style for DOM element dataset access (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/dom-node-dataset.md
		'unicorn/dom-node-dataset': ['warn', {
			preferAttributes: false,
		}],

		// Prefer `childNode.remove()` over `parentNode.removeChild(childNode)` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-remove.md
		'unicorn/prefer-dom-node-remove': 'warn',

		// Prefer `.textContent` over `.innerText`
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-text-content.md
		'unicorn/prefer-dom-node-text-content': 'error',

		// Prefer `EventTarget` over `EventEmitter`
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-target.md
		'unicorn/prefer-event-target': 'error',

		// Prefer modern DOM APIs (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-dom-apis.md
		'unicorn/prefer-modern-dom-apis': 'warn',

		// Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode` (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-keyboard-event-key.md
		'unicorn/prefer-keyboard-event-key': 'error',

		// Require `CSS.escape()` for interpolated values in CSS selectors (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-css-escape.md
		// Note: only attribute selector interpolations are checked to avoid escaping intentional selector fragments
		'unicorn/require-css-escape': ['warn', {
			checkAllSelectors: false,
		}],

		// Require passive event listeners for high-frequency events (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-passive-events.md
		'unicorn/require-passive-events': 'warn',
	},
});
