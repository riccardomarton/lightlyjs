/*
 * lightly.js testing
 */

app = lightly();

var container = document.getElementById('lightly-container');
app.setContainer(container);

/**
 *	General tests
 */

QUnit.test( "change appname", function( assert ) {

	var newname = 'aaaa';
	app.setAppName(newname);
	var name = app.getAppName();
	assert.ok( name == newname, 'Setted "'+newname+'" as app name' );

});

QUnit.test( "page managing and navigation", function( assert ) {

	//add page
	var page_test = {
		id: 'test',
		title: 'page test',
		contents: {
			quote: "this is a test!" 
		}
	}
	app.addPage(page_test);
	var pages = app.getPages();
	assert.ok( typeof pages['test'] != "undefined", 'Added test page' );

	//navigate
	app.navigate("test");
	assert.ok( document.getElementById('quote').innerHTML == page_test.contents.quote, 'Navigation to test page' );
});