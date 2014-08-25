/*
 * lightly.js testing
 */

app = lightly();

var container = document.getElementById("lightly-container");
app.setContainer(container);

/**
 *	General tests
 */
QUnit.test( "change appname", function( assert ) {

	var newname = "aaaa";
	app.setAppName(newname);
	var name = app.getAppName();
	assert.ok( name == newname, "Set new app name" );

});

/**
 *	Pages
 */
QUnit.test( "page managing and navigation", function( assert ) {

	//add page
	var page_test = {
		id: "test",
		title: "page test",
		contents: {
			quote: "this is a test!" 
		}
	}
	app.addPage(page_test);
	var pages = app.getPages();
	assert.ok( typeof pages["test"] != "undefined", "Added test page" );

	//navigate
	app.navigate("test");
	assert.ok( document.getElementById("quote").innerHTML == page_test.contents.quote, "Navigation to test page" );
});

/**
 *	Actions
 */
QUnit.test( "action managing, executing and history", function( assert ) {

	//add action
	test_action = {
		id: "test",
		callback: function() { window.testval = 1 },
	}
	app.addAction(test_action);
	var actions = app.getActions();
	assert.ok( typeof actions["test"] != "undefined", "Added test action" );

	test_action2 = {
		id: "test2",
		callback: function() { window.testval = 2 },
	}
	app.addAction(test_action2);

	//execute action
	app.executeAction("test");
	assert.ok( window.testval == 1, "Action executing via executeAction method" );

	app.do("test2");
	assert.ok( window.testval == 2, "Action executing via do method" );

	app.do("back");
	assert.ok( window.testval == 1, "Back action working" );

	var page_test = {
		id: "action-navigate-test",
		title: "page test",
		contents: {
			quote: "Navigate action test" 
		}
	}
	app.addPage(page_test);
	app.do("navigate", "action-navigate-test");
	assert.ok( document.getElementById("quote").innerHTML == page_test.contents.quote, "Navigate action working" );

});