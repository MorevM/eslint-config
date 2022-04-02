const { makeConfig } = require('../../../utils/tools.js');

const base = makeConfig([{ name: 'base', mode: 'strict' }]).rules;

const extendFromBase = (rule, extendWith = null) => {
	const cleanRule = rule.replace(/^[!+]/, '');
	const prefix = ['!', '+'].includes(rule[0]) ? rule[0] : '';
	const baseRule = base[cleanRule];
	if (!baseRule) throw new Error(`There is no rule ${rule} in base configuration`);

	const result = { [cleanRule]: 'off' }; // Disable base rule
	const severity = Array.isArray(baseRule) ? baseRule[0] : baseRule;
	const baseOptions = Array.isArray(baseRule) ? baseRule.slice(1) : [];

	const newOptions = extendWith
		? [{ ...baseOptions?.[0], ...extendWith }]
		: baseOptions;

	result[`${prefix}@typescript-eslint/${cleanRule}`] = [severity, ...newOptions];

	return result;
};

module.exports = {
	rules: {
		// Require that member overloads be consecutive
		// https://typescript-eslint.io/rules/adjacent-overload-signatures
		'@typescript-eslint/adjacent-overload-signatures': 'error',

		// Requires using either T[] or Array<T> for arrays (autofixable)
		// https://typescript-eslint.io/rules/array-type
		'+@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],

		// Disallows awaiting a value that is not a Thenable
		// https://typescript-eslint.io/rules/await-thenable
		'@typescript-eslint/await-thenable': 'error',

		// Bans `@ts-<directive>` comments from being used or requires descriptions after directive
		// https://typescript-eslint.io/rules/ban-ts-comment
		'@typescript-eslint/ban-ts-comment': ['error', {
			'ts-check': false,
			'ts-expect-error': 'allow-with-description',
			'ts-ignore': 'allow-with-description',
			'ts-nocheck': 'allow-with-description',
		}],

		// Bans `// tslint:<rule-flag>` comments from being used (autofixable but may produce bugs)
		// https://typescript-eslint.io/rules/ban-tslint-comment
		'!@typescript-eslint/ban-tslint-comment': 'warn',

		// Bans specific types from being used (autofixable)
		// https://typescript-eslint.io/rules/ban-types
		// Note: Defaults looks good
		'+@typescript-eslint/ban-types': ['warn', {
			types: {
				'String': {
					message: 'Use string instead',
					fixWith: 'string',
				},
				'Boolean': {
					message: 'Use boolean instead',
					fixWith: 'boolean',
				},
				'Number': {
					message: 'Use number instead',
					fixWith: 'number',
				},
				'Symbol': {
					message: 'Use symbol instead',
					fixWith: 'symbol',
				},

				// 'Function': {
				// 	message: [
				// 		'The `Function` type accepts any function-like value.',
				// 		'It provides no type safety when calling the function, which can be a common source of bugs.',
				// 		'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
				// 		'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
				// 	].join('\n'),
				// },

				// object typing
				'Object': {
					message: [
						'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
						'- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
						'- If you want a type meaning "any value", you probably want `unknown` instead.',
					].join('\n'),
				},
				'{}': {
					message: [
						'`{}` actually means "any non-nullish value".',
						'- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
						'- If you want a type meaning "any value", you probably want `unknown` instead.',
					].join('\n'),
				},
			},
			extendDefaults: false,
		}],

		// Enforce consistent brace style for blocks (autofixable)
		// https://typescript-eslint.io/rules/brace-style
		...extendFromBase('+brace-style'),

		// Ensures that literals on classes are exposed in a consistent style (autofixable)
		// https://typescript-eslint.io/rules/class-literal-property-style
		'@typescript-eslint/class-literal-property-style': ['error', 'fields'],

		// Require or disallow trailing comma (autofixable)
		// https://typescript-eslint.io/rules/comma-dangle
		...extendFromBase('+comma-dangle', {
			enums: 'always-multiline',
			generics: 'always-multiline',
			tuples: 'always-multiline',
		}),

		// Enforces consistent spacing before and after commas (autofixable)
		// https://typescript-eslint.io/rules/comma-spacing
		...extendFromBase('+comma-spacing'),

		// Enforce or disallow the use of the record type (autofixable)
		// https://typescript-eslint.io/rules/consistent-indexed-object-style
		// TODO: [2022-05-11] Take a look
		'+@typescript-eslint/consistent-indexed-object-style': 'off',

		// Enforces consistent usage of type assertions
		// https://typescript-eslint.io/rules/consistent-type-assertions
		'@typescript-eslint/consistent-type-assertions': ['warn', {
			assertionStyle: 'as',
			objectLiteralTypeAssertions: 'allow',
		}],

		// Consistent with type definition either interface or type (autofixable)
		// https://typescript-eslint.io/rules/consistent-type-definitions
		// TODO: [2022-05-11] Let this rule be turned off for a while
		'+@typescript-eslint/consistent-type-definitions': 'off',

		// Enforces consistent usage of type exports (autofixable) (SETTINGS)
		// https://typescript-eslint.io/rules/consistent-type-exports
		'+@typescript-eslint/consistent-type-exports': ['warn', {
			fixMixedExportsWithInlineTypeSpecifier: true,
		}],

		// Enforces consistent usage of type imports (autofixable)
		// https://typescript-eslint.io/rules/consistent-type-imports
		'+@typescript-eslint/consistent-type-imports': ['warn', {
			prefer: 'type-imports',
			disallowTypeAnnotations: true,
		}],

		// Enforce default parameters to be last
		// https://typescript-eslint.io/rules/default-param-last
		...extendFromBase('default-param-last'),

		// Enforce dot notation whenever possible (autofixable)
		// https://typescript-eslint.io/rules/dot-notation
		...extendFromBase('+dot-notation', {
			allowPrivateClassPropertyAccess: false,
			allowProtectedClassPropertyAccess: false,
			allowIndexSignaturePropertyAccess: false,
		}),

		// Require explicit return types on functions and class methods
		// https://typescript-eslint.io/rules/explicit-function-return-type
		'@typescript-eslint/explicit-function-return-type': ['off', {
			allowExpressions: true,
			allowTypedFunctionExpressions: true,
			allowHigherOrderFunctions: true,
			allowDirectConstAssertionInArrowFunctions: true,
			allowConciseArrowFunctionExpressionsStartingWithVoid: true,
		}],

		// Require explicit accessibility modifiers on class properties and methods (autofixable but confusing)
		// https://typescript-eslint.io/rules/explicit-member-accessibility
		// TODO: [2022-05-11] Watch later MIXED
		'!@typescript-eslint/explicit-member-accessibility': 'error',

		// MIXED
		// Require explicit return and argument types on exported functions' and classes' public class methods
		// https://typescript-eslint.io/rules/explicit-module-boundary-types
		'@typescript-eslint/explicit-module-boundary-types': 'off',

		// Require or disallow spacing between function identifiers and their invocations (autofixable)
		// https://typescript-eslint.io/rules/func-call-spacing
		...extendFromBase('+func-call-spacing'),

		// Enforce consistent indentation (autofixable)
		// https://typescript-eslint.io/rules/indent
		// Note: according to docs it may be broken, but let it be here for a while
		...extendFromBase('+indent'),

		// Require or disallow initialization in variable declarations
		// https://typescript-eslint.io/rules/init-declarations
		...extendFromBase('init-declarations'),

		// Enforce consistent spacing before and after keywords (autofixable)
		// https://typescript-eslint.io/rules/keyword-spacing/
		...extendFromBase('+keyword-spacing'),

		// Require or disallow an empty line between class members (autofixable)
		// https://typescript-eslint.io/rules/lines-between-class-members
		// Note: has additional options, but the defaults are good
		...extendFromBase('+lines-between-class-members'),

		// Require a specific member delimiter style for interfaces and type literals (autofixable)
		// https://typescript-eslint.io/rules/member-delimiter-style
		'+@typescript-eslint/member-delimiter-style': ['error', {
			multiline: {
				delimiter: 'semi',
				requireLast: true,
			},
			singleline: {
				delimiter: 'semi',
				requireLast: false,
			},
			multilineDetection: 'brackets',
		}],

		// Require a consistent member declaration order
		// https://typescript-eslint.io/rules/member-ordering
		// TODO: [2022-05-11] Way too long for now :D
		'@typescript-eslint/member-ordering': 'off',

		// Enforces using a particular method signature syntax (autofixable)
		// https://typescript-eslint.io/rules/method-signature-style
		'@typescript-eslint/method-signature-style': ['error', 'property'],

		// Enforces naming conventions for everything across a codebase
		// https://typescript-eslint.io/rules/naming-convention
		'@typescript-eslint/naming-convention': ['warn',
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE'],
				leadingUnderscore: 'allow',
				trailingUnderscore: 'allow',
			},
			{
				selector: 'typeLike',
				format: ['PascalCase'],
			}],

		// Disallow generic Array constructors (autofixable)
		// https://typescript-eslint.io/rules/no-array-constructor
		...extendFromBase('+no-array-constructor'),

		// Requires that `.toString()` is only called on objects which provide useful information when stringified
		// https://typescript-eslint.io/rules/no-base-to-string
		'@typescript-eslint/no-base-to-string': ['error', {
			ignoredTypeNames: ['RegExp'],
		}],

		// Disallow non-null assertion in locations that may be confusing (autofixable)
		// https://typescript-eslint.io/rules/no-confusing-non-null-assertion
		'+@typescript-eslint/no-confusing-non-null-assertion': 'warn',

		// Requires expressions of type void to appear in statement position (autofixable)
		// https://typescript-eslint.io/rules/no-confusing-void-expression
		'+@typescript-eslint/no-confusing-void-expression': ['warn', {
			ignoreArrowShorthand: true,
			ignoreVoidOperator: false,
		}],

		// Disallow duplicate class members
		// https://typescript-eslint.io/rules/no-dupe-class-members
		...extendFromBase('no-dupe-class-members'),

		// Disallow duplicate imports
		// https://typescript-eslint.io/rules/no-duplicate-imports
		...extendFromBase('no-duplicate-imports'),

		// Disallow the delete operator with computed key expressions (autofixable)
		// https://typescript-eslint.io/rules/no-dynamic-delete
		'+@typescript-eslint/no-dynamic-delete': 'error',

		// Disallow empty functions
		// https://typescript-eslint.io/rules/no-empty-function
		...extendFromBase('no-empty-function'),

		// Disallow the declaration of empty interfaces (autofixable)
		// https://typescript-eslint.io/rules/no-empty-interface
		'+@typescript-eslint/no-empty-interface': 'warn',

		// Disallow usage of the `any` type (autofixable but may change the behavior)
		// https://typescript-eslint.io/rules/no-explicit-any
		'!@typescript-eslint/no-explicit-any': ['off', {
			fixToUnknown: false,
			ignoreRestArgs: true,
		}],

		// Disallow extra non-null assertion (autofixable)
		// https://typescript-eslint.io/rules/no-extra-non-null-assertion
		'+@typescript-eslint/no-extra-non-null-assertion': 'warn',

		// Disallow unnecessary parentheses (autofixable)
		// https://typescript-eslint.io/rules/no-extra-parens
		...extendFromBase('+no-extra-parens'),

		// Disallow unnecessary parentheses (autofixable)
		// https://typescript-eslint.io/rules/no-extra-semi
		...extendFromBase('+no-extra-semi'),

		// Forbids the use of classes as namespaces
		// https://typescript-eslint.io/rules/no-extraneous-class
		'@typescript-eslint/no-extraneous-class': ['error', {
			allowConstructorOnly: false,
			allowEmpty: false,
			allowStaticOnly: false,
			allowWithDecorator: false,
		}],

		// Requires Promise-like values to be handled appropriately
		// https://typescript-eslint.io/rules/no-floating-promises
		'@typescript-eslint/no-floating-promises': ['error', {
			ignoreIIFE: true,
			ignoreVoid: true,
		}],

		// Disallow iterating over an array with a for-in loop
		// https://typescript-eslint.io/rules/no-for-in-array
		'@typescript-eslint/no-for-in-array': 'error',

		// Disallow the use of `eval()`-like methods
		// https://typescript-eslint.io/rules/no-implied-eval
		...extendFromBase('no-implied-eval'),

		// Disallows explicit type declarations for variables or parameters
		// initialized to a number, string, or boolean (autofixable)
		// https://typescript-eslint.io/rules/no-inferrable-types
		'+@typescript-eslint/no-inferrable-types': ['warn', {
			ignoreParameters: true,
			ignoreProperties: true,
		}],

		// Disallow `this` keywords outside of classes or class-like objects
		// https://typescript-eslint.io/rules/no-invalid-this
		...extendFromBase('no-invalid-this'),

		// Disallows usage of `void` type outside of generic or return types
		// https://typescript-eslint.io/rules/no-invalid-void-type
		'@typescript-eslint/no-invalid-void-type': ['error', {
			allowAsThisParameter: true,
			allowInGenericTypeArguments: true,
		}],

		// Disallow function declarations that contain unsafe references inside loop statements
		// https://typescript-eslint.io/rules/no-loop-func
		...extendFromBase('no-loop-func'),

		// Disallow literal numbers that lose precision
		// https://typescript-eslint.io/rules/no-loss-of-precision
		...extendFromBase('no-loss-of-precision'),

		// Disallow magic numbers
		// https://typescript-eslint.io/rules/no-magic-numbers
		...extendFromBase('no-magic-numbers', {
			ignoreEnums: true,
			ignoreNumericLiteralTypes: true,
			ignoreReadonlyClassProperties: true,
		}),

		// Disallow the `void` operator except when used to discard a value (autofixable)
		// https://typescript-eslint.io/rules/no-meaningless-void-operator
		'+@typescript-eslint/no-meaningless-void-operator': ['error', {
			checkNever: true,
		}],

		// Enforce valid definition of `new` and `constructor`
		// https://typescript-eslint.io/rules/no-misused-new
		'@typescript-eslint/no-misused-new': 'error',

		// Avoid using promises in places not designed to handle them
		// https://typescript-eslint.io/rules/no-misused-promises
		'@typescript-eslint/no-misused-promises': ['error', {
			checksConditionals: true,
			checksVoidReturn: true,
		}],

		// Disallow the use of custom TypeScript modules and namespaces
		// https://typescript-eslint.io/rules/no-namespace
		'@typescript-eslint/no-namespace': ['error', {
			allowDeclarations: true,
		}],

		// Disallows using a non-null assertion in the left operand of the nullish coalescing operator
		// https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

		// Disallows using a non-null assertion after an optional chain expression
		// https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

		// Disallows non-null assertions using the `!` postfix operator
		// https://typescript-eslint.io/rules/no-non-null-assertion
		'@typescript-eslint/no-non-null-assertion': 'error',

		// Disallow the use of parameter properties in class constructors
		// https://typescript-eslint.io/rules/no-parameter-properties
		'@typescript-eslint/no-parameter-properties': 'off',

		// Disallow variable re-declaration
		// https://typescript-eslint.io/rules/no-redeclare
		...extendFromBase('no-redeclare'),

		// Disallow members of unions and intersections that do nothing or override type information
		// https://typescript-eslint.io/rules/no-redundant-type-constituents
		'@typescript-eslint/no-redundant-type-constituents': 'error',

		// Disallows invocation of `require()`
		// https://typescript-eslint.io/rules/no-require-imports
		'@typescript-eslint/no-require-imports': 'error',

		// Disallow specified modules when loaded by `import`
		// https://typescript-eslint.io/rules/no-restricted-imports
		'@typescript-eslint/no-restricted-imports': 'off',

		// Disallow variable declarations from shadowing variables declared in the outer scope
		// https://typescript-eslint.io/rules/no-shadow
		// TODO: `ESLint` introduced new `ignoreOnInitialization` option in v8.10.0 that isn't implemented yet here.
		// When it comes, replace with `extendFromBase` call.
		// ...extendFromBase('no-shadow'),
		'@typescript-eslint/no-shadow': 'error',

		// Disallow aliasing `this`
		// https://typescript-eslint.io/rules/no-this-alias
		'@typescript-eslint/no-this-alias': ['error', {
			allowDestructuring: true,
			allowedNames: ['self', '_this'],
		}],

		// Disallow throwing literals as exceptions
		// https://typescript-eslint.io/rules/no-throw-literal
		...extendFromBase('no-throw-literal'),

		// Disallow the use of type aliases
		// https://typescript-eslint.io/rules/no-type-alias
		// TODO: [2022-05-11]
		'@typescript-eslint/no-type-alias': 'off',

		// Flags unnecessary equality comparisons against boolean literals
		// https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
		// TODO: [2022-05-11]
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

		// Prevents conditionals where the type is always truthy or always falsy (autofixable)
		// https://typescript-eslint.io/rules/no-unnecessary-condition
		'+@typescript-eslint/no-unnecessary-condition': 'warn',

		// Warns when a namespace qualifier is unnecessary (autofixable)
		// https://typescript-eslint.io/rules/no-unnecessary-qualifier
		'+@typescript-eslint/no-unnecessary-qualifier': 'warn',

		// Enforces that type arguments will not be used if not required (autofixable)
		// https://typescript-eslint.io/rules/no-unnecessary-type-arguments
		// Note: explicit better than implicit
		'+@typescript-eslint/no-unnecessary-type-arguments': 'off',

		// Warns if a type assertion does not change the type of an expression (autofixable)
		// https://typescript-eslint.io/rules/no-unnecessary-type-assertion
		'+@typescript-eslint/no-unnecessary-type-assertion': 'warn',

		// Disallows unnecessary constraints on generic types (autofixable)
		// https://typescript-eslint.io/rules/no-unnecessary-type-constraint
		'+@typescript-eslint/no-unnecessary-type-constraint': 'warn',

		// Disallows calling a function with an any type value
		// https://typescript-eslint.io/rules/no-unsafe-argument
		'@typescript-eslint/no-unsafe-argument': 'off',

		// Disallows assigning any to variables and properties
		// https://typescript-eslint.io/rules/no-unsafe-assignment
		'@typescript-eslint/no-unsafe-assignment': 'off',

		// Disallows calling an any type value
		// https://typescript-eslint.io/rules/no-unsafe-call
		'@typescript-eslint/no-unsafe-call': 'off',

		// Disallows member access on any typed variables
		// https://typescript-eslint.io/rules/no-unsafe-member-access
		'@typescript-eslint/no-unsafe-member-access': 'off',

		// Disallows returning any from a function
		// https://typescript-eslint.io/rules/no-unsafe-return
		'@typescript-eslint/no-unsafe-return': 'off',

		// Disallow unused expressions
		// https://typescript-eslint.io/rules/no-unused-expressions
		...extendFromBase('no-unused-expressions'),

		// Disallow unused variables
		// https://typescript-eslint.io/rules/no-unused-vars
		...extendFromBase('no-unused-vars'),

		// Disallow the use of variables before they are defined
		// https://typescript-eslint.io/rules/no-use-before-define
		...extendFromBase('no-use-before-define', {
			enums: true,
			typedefs: true,
			ignoreTypeReferences: false,
		}),

		// Disallow unnecessary constructors
		// https://typescript-eslint.io/rules/no-useless-constructor
		...extendFromBase('no-useless-constructor'),

		// Disallow empty exports that don't change anything in a module file
		// (autofixable but might be confusing during development)
		// https://typescript-eslint.io/rules/no-useless-empty-export/
		'!@typescript-eslint/no-useless-empty-export': 'warn',

		// Disallows the use of require statements except in import statements
		// https://typescript-eslint.io/rules/no-var-requires
		'@typescript-eslint/no-var-requires': 'error',

		// Prefers a non-null assertion over explicit type cast when possible
		// https://typescript-eslint.io/rules/non-nullable-type-assertion-style
		// Note: explicit better
		'@typescript-eslint/non-nullable-type-assertion-style': 'off',

		// Enforce consistent spacing inside braces (autofixable)
		// https://typescript-eslint.io/rules/object-curly-spacing
		...extendFromBase('+object-curly-spacing'),

		// Require or disallow padding lines between statements (autofixable)
		// https://typescript-eslint.io/rules/padding-line-between-statements
		...extendFromBase('+padding-line-between-statements'),

		// Prefer usage of `as const` over literal type (autofixable)
		// https://typescript-eslint.io/rules/prefer-as-const
		'+@typescript-eslint/prefer-as-const': 'warn',

		// Prefer initializing each enums member value
		// https://typescript-eslint.io/rules/prefer-enum-initializers
		'@typescript-eslint/prefer-enum-initializers': 'error',

		// Prefer a `for-of` loop over a standard `for` loop if the index is only used to access the array being iterated
		// https://typescript-eslint.io/rules/prefer-for-of
		'@typescript-eslint/prefer-for-of': 'warn',

		// Use function types instead of interfaces with call signatures (autofixable)
		// https://typescript-eslint.io/rules/prefer-function-type
		'+@typescript-eslint/prefer-function-type': 'warn',

		// Enforce `includes` method over `indexOf` method (autofixable)
		// https://typescript-eslint.io/rules/prefer-includes
		'+@typescript-eslint/prefer-includes': 'warn',

		// Require that all enum members be literal values to prevent unintended enum member name shadow issues
		// https://typescript-eslint.io/rules/prefer-literal-enum-member
		'@typescript-eslint/prefer-literal-enum-member': 'error',

		// Require the use of the `namespace` keyword instead of the `module`
		// keyword to declare custom TypeScript modules (autofixable)
		// https://typescript-eslint.io/rules/prefer-namespace-keyword
		'+@typescript-eslint/prefer-namespace-keyword': 'warn',

		// Enforce the usage of the nullish coalescing operator instead of logical chaining
		// https://typescript-eslint.io/rules/prefer-nullish-coalescing
		'+@typescript-eslint/prefer-nullish-coalescing': ['error', {
			ignoreConditionalTests: true,
			ignoreMixedLogicalExpressions: true,
		}],

		// Prefer using concise optional chain expressions instead of chained logical ands
		// https://typescript-eslint.io/rules/prefer-optional-chain
		'@typescript-eslint/prefer-optional-chain': 'error',

		// Requires that private members are marked as `readonly` if they're
		// never modified outside of the constructor (autofixable but may be confusing while developing)
		// https://typescript-eslint.io/rules/prefer-readonly
		'+@typescript-eslint/prefer-readonly': ['warn', {
			onlyInlineLambdas: false,
		}],

		// Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
		// https://typescript-eslint.io/rules/prefer-readonly-parameter-types
		// Note: is everything should be immutable in real life?
		'@typescript-eslint/prefer-readonly-parameter-types': 'off',

		// Prefer using type parameter when calling `Array#reduce` instead of casting (autofixable)
		// https://typescript-eslint.io/rules/prefer-reduce-type-parameter
		'+@typescript-eslint/prefer-reduce-type-parameter': 'warn',

		// Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided (autofixable)
		// https://typescript-eslint.io/rules/prefer-regexp-exec
		// Note: String#match more readable
		'+@typescript-eslint/prefer-regexp-exec': 'off',

		// Enforce that `this` is used when only `this` type is returned (autofixable)
		// https://typescript-eslint.io/rules/prefer-return-this-type
		'+@typescript-eslint/prefer-return-this-type': 'error',

		// Enforce the use of `String#startsWith` and `String#endsWith` instead of
		// other equivalent methods of checking substrings (autofixable)
		// https://typescript-eslint.io/rules/prefer-string-starts-ends-with
		'+@typescript-eslint/prefer-string-starts-ends-with': 'warn',

		// Recommends using `@ts-expect-error` over `@ts-ignore` (autofixable)
		// https://typescript-eslint.io/rules/prefer-ts-expect-error
		'+@typescript-eslint/prefer-ts-expect-error': 'error',

		// Requires any function or method that returns a `Promise` to be marked `async` (autofixable but may be confusing)
		// https://typescript-eslint.io/rules/promise-function-async
		'!@typescript-eslint/promise-function-async': ['error', {
			allowedPromiseNames: ['Thenable'],
			checkArrowFunctions: true,
			checkFunctionDeclarations: true,
			checkFunctionExpressions: true,
			checkMethodDeclarations: true,
		}],

		// Enforce the consistent use of either backticks, double, or single quotes (autofixable)
		// https://typescript-eslint.io/rules/quotes
		...extendFromBase('+quotes'),

		// Requires `Array#sort` calls to always provide a `compareFunction`
		// https://typescript-eslint.io/rules/require-array-sort-compare
		'@typescript-eslint/require-array-sort-compare': ['error', {
			ignoreStringArrays: true,
		}],

		// Disallow async functions which have no await expression
		// https://typescript-eslint.io/rules/require-await
		...extendFromBase('require-await'),

		// When adding two variables, operands must both be of type number or of type string
		// https://typescript-eslint.io/rules/restrict-plus-operands
		'@typescript-eslint/restrict-plus-operands': ['off', {
			checkCompoundAssignments: true,
			allowAny: false,
		}],

		// Enforce template literal expressions to be of string type
		// https://typescript-eslint.io/rules/restrict-template-expressions
		'@typescript-eslint/restrict-template-expressions': ['error', {
			allowNumber: true,
			allowBoolean: false,
			allowAny: false,
			allowNullish: false,
			allowRegExp: true,
		}],

		// Enforces consistent returning of awaited values (autofixable but may change behavior)
		// https://typescript-eslint.io/rules/return-await
		'!@typescript-eslint/return-await': ['error', 'in-try-catch'],

		// Require or disallow semicolons instead of ASI (autofixable)
		// https://typescript-eslint.io/rules/semi
		...extendFromBase('+semi'),

		// Enforces that members of a type union/intersection are sorted alphabetically
		// https://typescript-eslint.io/rules/sort-type-union-intersection-members
		// Note: developer knows better
		'@typescript-eslint/sort-type-union-intersection-members': 'off',

		// Enforces consistent spacing before blocks (autofixable)
		// https://typescript-eslint.io/rules/space-before-blocks/
		...extendFromBase('+space-before-blocks'),

		// Enforces consistent spacing before function parenthesis (autofixable)
		// https://typescript-eslint.io/rules/space-before-function-paren
		...extendFromBase('+space-before-function-paren'),

		// This rule is aimed at ensuring there are spaces around infix operators (autofixable)
		// https://typescript-eslint.io/rules/space-infix-ops
		...extendFromBase('+space-infix-ops'),

		// Restricts the types allowed in boolean expressions
		// https://typescript-eslint.io/rules/strict-boolean-expressions
		'@typescript-eslint/strict-boolean-expressions': 'off',

		// Exhaustiveness checking in switch with union type
		// https://typescript-eslint.io/rules/switch-exhaustiveness-check
		'@typescript-eslint/switch-exhaustiveness-check': 'error',

		// TS preference level for triple slash directives versus ES6-style import declarations
		// https://typescript-eslint.io/rules/triple-slash-reference
		'@typescript-eslint/triple-slash-reference': ['error', {
			lib: 'never',
			path: 'never',
			types: 'never',
		}],

		// Require consistent spacing around type annotations (autofixable)
		// https://typescript-eslint.io/rules/type-annotation-spacing
		// Note: good with default options
		'+@typescript-eslint/type-annotation-spacing': 'warn',

		// Requires type annotations to exist
		// https://typescript-eslint.io/rules/typedef
		'@typescript-eslint/typedef': 'off',

		// Enforces unbound methods are called with their expected scope
		// https://typescript-eslint.io/rules/unbound-method
		'@typescript-eslint/unbound-method': ['error', {
			ignoreStatic: true,
		}],

		// Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
		// https://typescript-eslint.io/rules/unified-signatures
		'@typescript-eslint/unified-signatures': 'warn',
	},
};
