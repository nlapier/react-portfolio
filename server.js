//Dependencies
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const request = require('request');
require('dotenv').config();

//Express setup
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//Routing
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

//Slack messaging - despite the route name, this actually uses a Slack webhook (a url held as an environmental variable) to slack me directly. 
app.post('/email', (req, res) => {
	request.post({
		headers: {'content-type' : 'application/x-www-form-urlencoded'},
		url: process.env.QUERY_URL,
		body: JSON.stringify({ 
			"text": req.body.message,
			"attachments":[{
				pretext: "Contact at: " + req.body.email
			}]
		})
	}, function(error, response, body){
		console.log(body);
	});
})

//Listener
app.listen(PORT, () => {
	console.log(`Server is now listening on ${PORT}`);
});


