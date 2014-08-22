/*
 * now.js Demo
 */

var app = nowjs();

var page_test1 = {
	url: 'test1',
	title: 'page test 1',
	contents: {
		quote: "this is a test!" 
	}
}
app.addPage(page_test1);

var page_test2 = {
	url: 'test2',
	title: 'page test 1',
	contents: {
		quote: function() {
			return 'This is another test with a random number '+Math.random();
		}
	},
	callback: function() { alert('page loaded!'); }
}
app.addPage(page_test2);

document.body.addEventListener('nowjs-pageload', function(evt) { console.log(evt); }  );