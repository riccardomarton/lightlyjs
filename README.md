lightly.js - a lightweight js app platform
=====

**lightly.js** is a simple application container. It's aim is to provide a **simple, dependency-free framework** to manage a one page web app.

It's not really powerful, and is very limited in usage, but it is designed this way. An the other hand it's so simple it's easily extended.

It is made for use primarly with Cordova/Phonegap, so it doesn't change the actual URL of the page. Possibly it will be a future implementation.

## Initialization ##
To initialize an app using lightly.js simply invoke the *nowjs* function inside a variable.

	var app = lightly();

## Container ##
The container is the element which contains the entire app. The container is the element which throws all the events triggered by nowjs.


By default it is the *body*, but you can change it by using the *setContainer* method.
	
	app.setContainer(elem);		//elem must be a valid DOM element

## Pages ##
Pages are objects representing pages of the application. A page object must have this structure.

   	var page = {
		id: 'identifier_of_page', 	//string
		title: 'Title of page', 	//string - optional
		contents: {},				//object - optional
		callback: function() {}		//function - optional
	};

You can add a page to your app using the *addPage* method
	
	app.addPage(page);

You can get a list of the assigned pages by using the *getPages* method

	var pages = app.getPages();

	//returns
	pages = {
		"id1": {...}, 	//page object 1
		"id2": {...}, 	//page object 2
		...
	}
	


## Actions ##

Actions are objects containing functions to trigger. lightly.js mantains an history of actions triggered in order to offer en easy *back* action. A action object must have this structure

   	var action = {
		id: 'identifier_of_action', 	//string
		callback: function() {}			//function - optional
		history: true | false			//boolean - optional
	};

*back* and *navigate* are built-in actions and cannot be ovewritten. If you try to do so the *container* will throw an Exception. 
You can add an action to your app using the *addAction* method
	
	app.addAction(action);

You can get a list of the assigned actions by using the *getActions* method

	var actions = app.getActions();

	//returns
	actions = {
		"id1": {...}, 	//action object 1
		"id2": {...}, 	//action object 2
		...
	}

To execute an action you can use the *executeAction* method. Alternatively, you can use the shorthand method *do*

	app.executeAction('identifier_of_action');
	app.do('identifier_of_action');

You can pass a *params* object to these methods, which will be passed as argument to the action function.
	
	var action = {
		id: 'identifier_of_action',
		callback: function(params) {...}
	}
	...
	app.do('identifier_of_action', params);

## Events ##
Some custom events are thrown by the container of the application. The event object contains, if needed, a property named *vars* which contains option informations, depending on event.

* **nowjs-page-added**: thrown when a new page has been added. A reference to the page object is contained in the *vars* property of the event.
* **nowjs-page-load**: thrown when a new page has finished loading, after the callback. A reference to the page object is contained in the *vars* property of the event.
* * **nowjs-action-added**: thrown when a new action has been added. A reference to the action object is contained in the *vars* property of the event.