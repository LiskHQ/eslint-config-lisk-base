module.exports = {
	plugins: ['mocha', 'chai-expect'],
	rules: {
		// Plugin rules
		'mocha/handle-done-callback': 'error',
		'mocha/max-top-level-suites': 'warn',
		'mocha/no-async-describe': 'error',
		'mocha/no-exclusive-tests': 'error',
		'mocha/no-global-tests': 'error',
		'mocha/no-identical-title': 'error',
		'mocha/no-nested-tests': 'error',
		'mocha/no-pending-tests': 'error',
		'mocha/no-return-and-callback': 'error',
		'mocha/no-sibling-hooks': 'error',
		'mocha/no-skipped-tests': 'error',
		'mocha/no-synchronous-tests': 'error',
		'mocha/no-top-level-hooks': 'error',
	},
};
