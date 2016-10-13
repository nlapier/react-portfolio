//Dependencies
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const request = require('request');
require('dotenv').config();

const app = express();

//Express setup
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




/*SCRAP

				let slackBody = JSON.stringify({
					'channel': '#general', 
					'username': 'webhookbot', 
					'text': text, 
					'icon_emoji': ':ghost:'
					});

				console.log("slackBody: ", typeof slackBody);

			    $.ajax({
			        url: queryURL,
			        type: 'POST',
			        data: slackBody
			    }).done(function(response){

			        console.log("response: " + response);








//nodemailer

app.post("/email", function (request, response, next){
	console.log(request.body);
	let transporter = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user:
		}
	});

})


 
// setup e-mail data with unicode symbols 
var mailOptions = {
    from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address 
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers 
    subject: 'Hello ✔', // Subject line 
    text: 'Hello world 🐴', // plaintext body 
    html: '<b>Hello world 🐴</b>' // html body 
};
 
// send mail with defined transport object 
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});

*/

