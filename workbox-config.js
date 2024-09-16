module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{js,html,ico,json}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};