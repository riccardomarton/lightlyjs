now.js - a lightweight js app platform
=====

**now.js** is a simple application container. It's aim is to provide a **simple, dependency-free framework** to manage a one page web app.

It's not really powerful, and is very limited in usage, but it is designed this way. An the other hand it's so simple it's easily extended.

It is made for use primarly with Cordova/Phonegap, so it doesn't change the actual URL of the page. Possibly it will be a future implementation.

## Initialization ##
To initialize an app using now.js simply invoke the *nowjs* function inside a variable.

	var app = nowjs();

## Pages ##
Pages are objects representing pages of the application. A page object must have this structure.

   	var page = {
		url: 'identifier of page', 	//string
		title: 'Title of page', 	//string - optional
		contents: {},				//object - optional
		callback: function() {}		//function - optional
	};

You can add a page to your app using the *addPage* method
	
	app.addPage(page);

You can get a list of the assigned pages by using the *getPages* method

	app.getPages();

	//returns
	{
		"url1": {...}, 	//page object 1
		"url2": {...}, 	//page object 2
		...
	}
	


## Actions ##

