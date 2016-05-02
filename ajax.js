//JavaScript med AJAX
var request = new XMLHttpRequest;

request.onreadystatechange = function(req, res) {
	console.log("Någonting hände!");
	console.log("Svaret (response) är " + res.responseText);
}

request.open( 'GET', 'http://mardby.se/AJK15G/lorem_text.php');
request.send();