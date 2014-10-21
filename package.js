Package.describe({
	name: "citizenkevin:medium-editor",
	summary: "MediumEditor with Default Theme + MediumEditor Jquery Insert Plugin",
	version: "1.0.1",
	git: 'https://github.com/CitizenKevin/meteor-medium-editor'
});

Package.on_use(function (api) {
	api.versionsFrom('METEOR@0.9.0');
	var files = [
		'medium-editor.js', 
		'medium-editor.css',
		'default.css',
		'insert-plugin/js/medium-editor-insert-plugin.all.js',
		'insert-plugin/css/medium-editor-insert-plugin.css'
	];

	api.add_files(files, 'client');

	if(api.export)
		api.export('MediumEditor', 'client');
});
