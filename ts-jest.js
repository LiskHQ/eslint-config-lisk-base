module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'jest'],
	extends: [
		'./ts',
		'plugin:jest/recommended',
		'plugin:jest/style',
	],
	env: {
		'jest/globals': true,
	},
	rules: {
		'jest/valid-title': 'off',
		'jest/no-conditional-expect': 'off',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'jest/consistent-test-it': ['error'],
		'class-methods-use-this': 'off',
		'@typescript-eslint/no-magic-numbers': 'off',
		'@typescript-eslint/unbound-method': 'off',
		'@typescript-eslint/no-require-imports': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/ban-types': 'warn',
		'@typescript-eslint/require-await': ['warn'],
		'@typescript-eslint/restrict-template-expressions': ['warn'],
		'dot-notation': 'off',
		'lines-between-class-members': 'off',
		'arrow-body-style': 'off',
		'no-underscore-dangle': 'off',
	},
};
