Package.describe({
	name: "gildaspk:medium-editor",
	summary: "MediumEditor with Default Theme: no plugins",
	version: "0.0.1",
	git: 'https://github.com/djhi/meteor-medium-editor'
});

Package.on_use(function (api) {
	api.versionsFrom('METEOR@0.9.0');
	var files = [
		'medium-editor.js',
		'meteor.js',
		'medium-editor.css',
		'default.css',
	];

	api.add_files(files, 'client');

	if(api.export)
		api.export('MediumEditor', 'client');
});
