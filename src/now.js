/**
 * Version: 0.1
 * Author: Riccardo Marton <marton.riccardo@gmail.com>
 * 
 * License: Licensed under The MIT License. See LICENSE file
 */

var nowjs = function() {

	/*
	 * Private properties
	 */
	var appname = "new App";
	var container = document.body;
	var pages = {};
	var actions = {};

	/*
	 * Set a node as main container. nowjs will not operate outside of the node
	 * provided
	 */
	function setContainer(node) {

		if (!inDOM(node))
			throw {
				name: "nowjs-container-invalid",
				message: "Object provided is not a DOM element"
			}

		container = node;
	}

	/*
	 * Add a page to the pages object
	 */
	function addPage (page) {

		if( !page || typeof page.url != "string" ) {
			throw {
				name: "nowjs-page-nourl",
				message: "No url specified for new page"
			}
		}

		var new_page = {
			url: page.url,
			title: page.title || "New page",
			contents: page.contents || {},
			callback: page.callback || function() {}
		}

		pages[page.url] = new_page;

	}

	/*
	 * Load and display a page
	 */
	function navigate(url, vars, back) {
		//main function, rebuilds DOM

		if (typeof pages[url] == "undefined")
			throw {
				name: 'nowjs-page-nonexistant',
				message: 'Page '+url+' does not exist'
			}

		var back = back ? true : false;

		var page = pages[url];

		document.title = page.title;

		for (id in page.contents) {

			var elem = document.getElementById(id);
			if (elem == null)
				continue;

			if (typeof page.contents[id] == 'function') {
				elem.innerHTML = page.contents[id]();
			} else {
				elem.innerHTML = page.contents[id];
			}

		}

		if (typeof page.callback == 'function')
			page.callback();

		triggerEvent(container, 'nowjs-pageload', {page: page});

	}


	/*
	 * Utilities functions
	 */

	/*
	 * Check if elem is a valid DOM element
	 */
	function inDOM(elem) {
		do {
			if (elem == document.documentElement) {
				return true;
			}
		} while (elem = elem.parentNode);

		return false;
	}

	function triggerEvent(element, eventname, vars) {
		var event; // The custom event that will be created


		if (document.createEvent) {
			event = document.createEvent("HTMLEvents");
			event.initEvent(eventname, true, true);
		} else {
			event = document.createEventObject();
			event.eventType = eventname;
		}

		event.eventName = eventname;
		event.vars = vars;

		if (document.createEvent) {
			element.dispatchEvent(event);
		} else {
			element.fireEvent("on" + event.eventType, event);
		}
	}

	/*
	 * Expose public methods
	 */
	return {

		/*
		 * App name and general infos
		 */
		setAppName: function(new_name) {
			appname = new_name;
		},
		getAppName: function() {
			return appname;
		},
		setContainer: function(node) {
			setContainer(node);
		},

		/*
		 * Pages management
		 */
		addPage: function(page) {
			addPage(page);
		},
		getPages: function() {
			return pages;
		},
		navigate: function(url) {
			navigate(url);
		},

		/*
		 * Actions management
		 */
		addAction: function() {

		},
		getActions: function() {

		}
	}

}