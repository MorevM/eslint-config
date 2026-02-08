import { pluginHtml } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		'@html-eslint': pluginHtml,
	},
	rules: {
		// Disallow duplicate attributes
		// https://html-eslint.org/docs/rules/no-duplicate-attrs
		'@html-eslint/no-duplicate-attrs': 'error',

		// This rule disallows duplicate class names in class attributes
		// https://html-eslint.org/docs/rules/no-duplicate-class
		'@html-eslint/no-duplicate-class': 'error',

		// Disallow duplicate `id` attributes
		// https://html-eslint.org/docs/rules/no-duplicate-id
		'@html-eslint/no-duplicate-id': 'error',

		// Disallows duplicate tags in the `<head>` section
		// https://html-eslint.org/docs/rules/no-duplicate-in-head
		'@html-eslint/no-duplicate-in-head': 'error',

		// Disallow HTML attributes that have no effect in their context
		// https://html-eslint.org/docs/rules/no-ineffective-attrs
		'@html-eslint/no-ineffective-attrs': 'error',

		// Disallow inline styles
		// https://html-eslint.org/docs/rules/no-inline-styles
		'@html-eslint/no-inline-styles': 'off',

		// Disallow use of invalid HTML entities
		// https://html-eslint.org/docs/rules/no-invalid-entity
		'@html-eslint/no-invalid-entity': 'error',

		// Disallows interactive elements from being nested
		// https://html-eslint.org/docs/rules/no-nested-interactive
		'@html-eslint/no-nested-interactive': 'off',

		// Disallows the use of obsolete attributes in HTML5
		// https://html-eslint.org/docs/rules/no-obsolete-attrs
		'@html-eslint/no-obsolete-attrs': 'warn',

		// Disallow using obsolete tags in HTML5
		// https://html-eslint.org/docs/rules/no-obsolete-tags
		'@html-eslint/no-obsolete-tags': 'error',

		// Disallow specified attribute values
		// https://html-eslint.org/docs/rules/no-restricted-attr-values/
		'@html-eslint/no-restricted-attr-values': 'off',

		// Disallow specified attributes
		// https://html-eslint.org/docs/rules/no-restricted-attrs
		// Note: should be configured individually if needed
		'@html-eslint/no-restricted-attrs': 'off',

		// Disallow specified tags
		// https://html-eslint.org/docs/rules/no-restricted-tags
		// Note: should be configured individually if needed
		'@html-eslint/no-restricted-tags': 'off',

		// Disallow usage of type attributes for stylesheets and scripts (autofixable)
		// https://html-eslint.org/docs/rules/no-script-style-type
		'@html-eslint/no-script-style-type': 'warn',

		// Disallow usage of unsafe `target='_blank'`
		// https://html-eslint.org/docs/rules/no-target-blank
		'@html-eslint/no-target-blank': 'error',

		// Disallows tags that contain only whitespace characters (autofixable)
		// https://html-eslint.org/docs/rules/no-whitespace-only-children
		'@html-eslint/no-whitespace-only-children': 'warn',

		// Enforces to use `HTTPS` for embedded resources (image, media, style sheet and script)
		// https://html-eslint.org/docs/rules/prefer-https
		'@html-eslint/prefer-https': 'error',

		// Enforces the use of tag with specified attributes
		// https://github.com/yeonjuan/html-eslint/blob/main/docs/rules/require-attrs.md
		// Note: should be configured individually if needed
		'@html-eslint/require-attrs': 'off',

		// Require use of `button` element with a valid `type` attribute
		// https://html-eslint.org/docs/rules/require-button-type
		'@html-eslint/require-button-type': 'error',

		// Require use of closing tag (autofixable for `void` elements)
		// https://html-eslint.org/docs/rules/require-closing-tags
		'@html-eslint/require-closing-tags': ['warn', {
			selfClosing: 'always',
			selfClosingCustomPatterns: [],
		}],

		// Require `<!DOCTYPE html>` in the document (autofixable)
		// https://html-eslint.org/docs/rules/require-doctype
		'@html-eslint/require-doctype': 'error',

		// Require `<!DOCTYPE html>` in the document (autofixable)
		// https://html-eslint.org/docs/rules/require-explicit-size
		// Note: way too strict, there are several ways to prevent CLS
		'@html-eslint/require-explicit-size': 'off',

		// Enforce `<li>` to be in `<ul>`, `<ol>` or `<menu>`
		// https://html-eslint.org/docs/rules/require-li-container
		'@html-eslint/require-li-container': 'error',

		// Enforce to use `<meta charset="...">` in the `<head></head>`
		// https://html-eslint.org/docs/rules/require-meta-charset
		'@html-eslint/require-meta-charset': 'error',

		// Enforce the use of baseline features
		// https://html-eslint.org/docs/rules/use-baseline
		'@html-eslint/use-baseline': 'off',
	},
});
