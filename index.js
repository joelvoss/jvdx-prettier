module.exports = {
	printWidth: 80,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	bracketSpacing: true,
	jsxBracketSameLine: false,
	arrowParens: 'avoid',
	overrides: [
		{
			files: 'package.json',
			options: {
				useTabs: false,
				parser: 'JSON-stringify',
			},
		},
	],
};
