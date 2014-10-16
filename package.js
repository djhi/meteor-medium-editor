Package.describe({
	name: "donflopez:medium-editor",
	summary: "Add medium-editor clone and insert plugin to Meteor client side",
	version: "1.2.3"
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
