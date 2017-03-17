const text = {
	welcomeText: "Welcome!",

	bioText: "Born and raised in Austin, TX, I studied economics at Trinity University before moving to New York City in 2010.  I'm an aspiring full-stack web developer with both self-starter experience and a formal education in web development from Rutgers Coding Bootcamp.  I pay my bills working as a freelance web developer, a handyman on Taskrabbit, and a courier on UberRUSH. When I'm not coding or working, I like to explore, volunteer, ride my bicycle and motorcycle, root for the Spurs, and plot to import breakfast tacos and the word \"y'all\" to NYC.",

	moreText: "Please have a look at some of my projects in the Portfolio section.  You can view my code, find me on LinkedIn, and reach out to me directly using the Contact page.",

	inAddition: "In addition to HTML, CSS and vanilla JavaScript, I can hold my own using:",

	skills: ["jQuery", "Node.js", "Express.js", "Firebase", "MySQL & Sequelize", "MongoDB & Mongoose", "React.js"],

	apps: [
		{
			title: "Fresh Hangman",
			text: "A 90s-tastic jQuery-powered experience.",
			img: "/assets/images/prince.png",
			url: "https://nlp-fresh-hangman.herokuapp.com/",
			github: "https://github.com/nlapier/Hangman"
		},
		{
			title: "GIF-Explosion",
			text: "A first-time attempt at retrieving data from a web API.",
			img: "/assets/images/gif.png",
			url: "https://nlp-gif-explosion.herokuapp.com/",
			github: "https://github.com/nlapier/GIF-explosion"
		},
		{
			title: "Bet the Future",
			text: "A full-stack, Handlebars.js-based social media platform for tracking micro-wagers between friends.",
			img: "/assets/images/bet.png",
			url: "https://betthefuture.herokuapp.com/",
			github: "https://github.com/eHatz/Bet-The-Future"
		},
		{
			title: "Bootcampspot 2.0",
			img: "/assets/images/bootcamspot2.png",
			url:"http://bootcampspot2.herokuapp.com/",
			github: "https://github.com/eHatz",
			text: "A complete rewrite of Rutgers Coding Bootcamp's student portal using React, Node, Express and MySQL."
		}
	],

	contacts: [
		{
			img: "/assets/images/linkedin.png",
			url: "https://www.linkedin.com/in/nathaniel-lapier-6637244a",
			text: "LinkedIn",
			target:"_blank"
		},
		{
			img: "/assets/images/github.png",
			url: "https://github.com/nlapier",
			text: "Github",
			target:"_blank"
		},
		{
			img: "/assets/images/email.png",
			url: "#",
			text: "Email",
			target: "#"
		}
	]
}

module.exports = text;