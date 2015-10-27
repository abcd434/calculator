module.exports = function(grunt, tasks)
{
	grunt.loadNpmTasks('grunt-contrib-clean');

	tasks.clean = [
		grunt.uriCss + '*.css',
		grunt.uriCss + '*.map',
		grunt.uriJs + '*.js',
		grunt.uri + 'index.html',
		grunt.uri + 'fonts',
		grunt.uriBuild
	];

	return tasks;
};
