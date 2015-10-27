module.exports = function(grunt, tasks)
{
	grunt.loadNpmTasks('grunt-contrib-compass');

	tasks.compass = {
		dev: {
			options: {
				sassDir:     'www/src',
				cssDir:      'www/css',
				sourcemap:   true
			}
		},
		prod: {
			options: {
				sassDir:   'www/src',
				cssDir:    'www/css',
				sourcemap: false
			}
		}
	};
	return tasks;
};
