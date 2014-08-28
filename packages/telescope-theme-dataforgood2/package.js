Package.describe({summary: "Telescope dataforgood 2 theme"});

Package.on_use(function (api) {

	api.use(['bootstrap-3'], ['server']);

  	  api.add_files(
  	['lib/client/css/dataforgood.css',], ['client']
  	);

});                                                           

