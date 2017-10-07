module.exports = {
	root: true,
	parser: 'babel-eslint',
	env: {
        browser: true,
        node: true
	},
	extends: 'airbnb-base',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// add your custom rules here
	'rules': {
		'indent': ['error', 4],
		'comma-dangle': ['error', {
			'arrays': 'always-multiline',
			'objects': 'always-multiline',
		}],
		'no-shadow': ['error', { 'allow': ['state'] }],
		'no-param-reassign': ['off', {}],
		'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
		'no-undef': ["off", {}],
		'indent': ["off", {}],
		'import/no-extraneous-dependencies': 0,
		'import/no-named-as-default': ["off", {}],
		'import/extensions': ["off", {}],
		'class-methods-use-this': ["off", {}],
		'no-unused-vars': ["off", {}],
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
	},
	'globals': {
		'app': true,
	}
};
