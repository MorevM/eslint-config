import { pluginVue } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		vue: pluginVue,
	},
	rules: {
		// Enforce order of attributes (autofixable)
		// https://eslint.vuejs.org/rules/attributes-order.html
		'vue/attributes-order': ['warn', {
			order: [
				'DEFINITION',
				'LIST_RENDERING',
				'CONDITIONALS',
				'RENDER_MODIFIERS',
				'OTHER_DIRECTIVES',
				'GLOBAL',
				'UNIQUE',
				'TWO_WAY_BINDING',
				'ATTR_STATIC',
				'ATTR_SHORTHAND_BOOL',
				'ATTR_DYNAMIC',
				'EVENTS',
				'CONTENT',
			],
			alphabetical: false,
		}],

		// Disallow unnecessary `<template>`
		// https://eslint.vuejs.org/rules/no-lone-template.html
		'vue/no-lone-template': ['error', {
			ignoreAccessible: false, // no effect in vue2 but let this thing be here
		}],

		// Disallow to pass multiple arguments to scoped slots
		// https://eslint.vuejs.org/rules/no-multiple-slot-args.html
		'vue/no-multiple-slot-args': 'error',

		// Disallow use of v-html to prevent XSS attack
		// https://eslint.vuejs.org/rules/no-v-html.html
		'vue/no-v-html': 'off',

		// Enforce order of properties in components (autofixable)
		// https://eslint.vuejs.org/rules/order-in-components.html
		'vue/order-in-components': ['warn', {
			order: [
				'el',
				'name',
				'compilerOptions',
				'inheritAttrs',
				'key',
				'parent',
				'functional',
				'extends',
				'mixins',
				['delimiters', 'comments'],
				['components', 'directives', 'filters'],
				['provide', 'inject'],
				'ROUTER_GUARDS',
				'layout',
				'middleware',
				'validate',
				'scrollToTop',
				'transition',
				'loading',
				'model',
				['props', 'propsData'],
				'emits',
				'slots',
				'expose',
				'setup',
				'fetch',
				'asyncData',
				'data',
				'head',
				'computed',
				'watch',
				'watchQuery',
				'methods',
				'LIFECYCLE_HOOKS',
				['template', 'render'],
				'renderError',
			],
		}],

		// Disallow usage of this in template (autofixable)
		// https://eslint.vuejs.org/rules/this-in-template.html
		'vue/this-in-template': ['warn', 'never'],
	},
});
