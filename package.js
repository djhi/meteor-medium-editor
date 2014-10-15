Package.describe({
	name: "citizenkevin:medium-editor",
	summary: "Add medium-editor and medium insert clone to Meteor client side",
	version: "1.2.2"
});

Package.on_use(function (api) {
	api.versionsFrom('METEOR@0.9.2');
  	api.use('jquery','client');
	api.add_files(['medium-editor.css','medium-editor.js'], 'client');

	if(api.export)
		api.export('MediumEditor', 'client');
});
