import { pluginHtml } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		'@html-eslint': pluginHtml,
	},
	rules: {
		// Disallow use of abstract roles
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-abstract-roles
		'@html-eslint/no-abstract-roles': 'error',

		// Disallow accesskey attributes
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-accesskey-attrs
		'@html-eslint/no-accesskey-attrs': 'error',

		// Disallow to use `aria-hidden` attributes on the `body` element
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-aria-hidden-body
		'@html-eslint/no-aria-hidden-body': 'error',

		// Disallow the use of `aria-hidden="true"` on focusable elements
		// https://html-eslint.org/docs/rules/no-aria-hidden-on-focusable
		'@html-eslint/no-aria-hidden-on-focusable': 'error',

		// Enforce that all heading elements (`h1–h6`) and elements with `role="heading"` must have accessible text content
		// https://html-eslint.org/docs/rules/no-empty-headings
		'@html-eslint/no-empty-headings': 'warn',

		// Disallows the use of heading elements inside `<button>`
		// https://html-eslint.org/docs/rules/no-heading-inside-button
		'@html-eslint/no-heading-inside-button': 'error',

		// This rule disallows the use of invalid role on elements
		// https://html-eslint.org/docs/rules/no-invalid-role
		'@html-eslint/no-invalid-role': 'error',

		// Disallow use of `user-scalable=no` in `<meta name="viewport">`
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-non-scalable-viewport
		'@html-eslint/no-non-scalable-viewport': 'error',

		// Disallow use of positive `tabindex` attribute
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-positive-tabindex
		'@html-eslint/no-positive-tabindex': 'error',

		// Disallow skipping heading levels
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-skip-heading-levels
		'@html-eslint/no-skip-heading-levels': 'warn',

		// Enforces to use a valid `method` attribute on the `<form>`
		// https://html-eslint.org/docs/rules/require-form-method
		'@html-eslint/require-form-method': 'error',

		// Require title attribute in `<frame>` and `<iframe>`
		// https://yeonjuan.github.io/html-eslint/docs/rules/require-frame-title
		'@html-eslint/require-frame-title': 'error',

		// Require `alt` attribute at `img` tag
		// https://yeonjuan.github.io/html-eslint/docs/rules/require-img-alt
		'@html-eslint/require-img-alt': 'error',

		// Enforces the presence of accessible labels for input elements
		// https://html-eslint.org/docs/rules/require-input-label
		'@html-eslint/require-input-label': 'error',

		// Enforce to use `<meta name="viewport" ...>` in the `<head></head>`
		// https://yeonjuan.github.io/html-eslint/docs/rules/require-meta-viewport
		'@html-eslint/require-meta-viewport': 'error',
	},
});
