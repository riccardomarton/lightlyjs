/**
 * Version: 0.1
 * Author: Riccardo Marton <marton.riccardo@gmail.com>
 * 
 * License: Licensed under The MIT License. LICENSE file
 */

var nowjs = function() {

	var appname = 'new App';
	var pages = [];
	var actions = [];

	function addPage (page) {

		if( !page || typeof page.url != 'string' ) {
			throw {
				name: 'nowjs-page-nourl',
				message: 'No url specified for new page'
			}
		}

		var new_page = {
			url: page.url,
			title: page.title || 'New page',
			contents: page.contents || {},
			callback: page.callback || function() {}
		}

	}



	return {
		setAppName: function(new_name) {
			appname = new_name;
		},
		getAppName: function() {
			return appname;
		},
		addPage: function(page) {
			var new_page = {

			}
		},
		getPages: function() {
			return pages;
		}
	}

}