/*
 * lightly.js testing
 */

app = lightly();

/**
 *	General tests
 */

QUnit.test( "app name", function( assert ) {

	var newname = 'aaaa';
	app.setAppName(newname);
	var name = app.getAppName();
	assert.ok( name == newname, 'Setted "'+newname+'" as app name with success' );

});