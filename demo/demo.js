/*
 * now.js Demo
 */

var app = nowjs();

var page_test1 = {
	id: 'test1',
	title: 'page test 1',
	contents: {
		quote: "this is a test!" 
	}
}
app.addPage(page_test1);

var page_test2 = {
	id: 'test2',
	title: 'page test 1',
	contents: {
		quote: function() {
			return 'This is another test with a random number '+Math.random();
		}
	},
	callback: function() { alert('page loaded!'); }
}
app.addPage(page_test2);


test_action = {
	id: 'test',
	callback: function() {alert('action triggered')},
}
app.addAction(test_action);

document.body.addEventListener('nowjs-pageload', function(evt) { console.log(evt); }  );