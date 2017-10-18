const text = {
	welcomeText: "Welcome!",

	bioText: "Born and raised in Austin, TX, I studied economics at Trinity University before moving to New York City in 2010.  I am a professional web developer: self-taught to start, formally educated at Rutgers Coding Bootcamp, and currently plying my trade with the wonderful folks at Sema4 Genomics.  When I'm not working, I like to explore, volunteer, ride my bicycle and motorcycle, root for the Spurs, and plot to import breakfast tacos and the word \"y'all\" to NYC.",

	moreText: "Please have a look at some of my projects in the Portfolio section.  You can view my code, find me on LinkedIn, and reach out to me directly using the Contact page.",

	inAddition: "In addition to HTML, CSS and vanilla JavaScript, I can hold my own using:",

	skills: ["jQuery", "Node.js", "Express.js", "Firebase", "MySQL & Sequelize", "MongoDB & Mongoose", "React.js"],

	apps: [
		{
			title: "Bootcampspot 2.0",
			img: "/assets/images/bootcamspot2.png",
			url:"http://bootcampspot2.herokuapp.com/",
			github: "https://github.com/eHatz",
			text: "A complete rewrite of Rutgers Coding Bootcamp's student portal using React, Node, Express and MySQL."
		},
		{
			title: "My Portfolio",
			text: "This website: A basic responsive 'WREN'(Webpack-React-Express-Node) webpage.",
			img: "/assets/images/portfolio.png",
			url: "https://github.com/nlapier/react-portfolio",
			github: "https://github.com/nlapier/react-portfolio"
		},
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