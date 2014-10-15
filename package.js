Package.describe({
	name: "citizenkevin:medium-editor",
	summary: "Add medium-editor and medium insert clone to Meteor client side",
	version: "1.2.1"
});

Package.on_use(function (api) {
	api.versionsFrom('METEOR@0.9.2');
  	api.use('jquery','client');
	api.add_files(['medium-editor.css','medium-editor.js', 'medium-editor-insert-plugin.all.min.js','medium-editor-insert-plugin.css'], 'client');

	if(api.export)
		api.export('MediumEditor', 'client');
});
