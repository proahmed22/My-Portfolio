import self from "../img/self.jpg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import { colors } from '../colors/mainGradient';
/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

// export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: " Ahmed",
    lastName: " Ashraf",
    initials: "A7", 
    position: "Junior Front End Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '📱',
            text: '+201021257615'
        },
        {
            emoji: '🌎',
            text: 'Al Buhayrah , Egypt'
        },
       
        {
            emoji: "📧",
            text: "proahmedasharf0@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/ahmedashrafaly22",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/proa7md22/?igshid=ZGUzMzM3NWJiOQ%3D%3D",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/proahmed22",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/ahmed-ashraf-aly22/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/devahmedashraf",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Ahmed. junior Front End Developer . Experienced in UI development. Have a  good experience in: HTML, CSS, JavaScript, SASS. And frameworks including React, Bootstrap. I have Built many UI projects which included in my GitHub profile. I have my own way of seeing designs and I care about the details. You should hire me!",
    skills:
        {
            proficientWith: ['Javascript/ECMA6', 'React', 'git', 'github', 'Bootstrap', 'Html5', 'Css3', 'Figma' , 'SASS' , 'jQuery' , 'TypeScript','Regular expressions ','Hosting and domains '],
            LearnNow: ['nodejs', 'Express Js', 'Next js' ,'adobe illustrator']
        }
    ,
 


    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Yummy",
            live: "https://proahmed22.github.io/Yala-Yummy/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/proahmed22/Yala-Yummy", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Protfolio",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Quote App",
            live: "https://proahmed22.github.io/QuoteApp/",
            source: "https://proahmed22.github.io/QuoteApp/",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://my-portfolio-klco.onrender.com/",
            source: "https://github.com/proahmed22/QuoteApp",
            image: mock4
        },
        {
            title: "GAME-REVIEWS",
            live: "https://proahmed22.github.io/GAME-REVIEWS/",
            source: "https://github.com/proahmed22/GAME-REVIEWS",
            image: mock5
        }
    ]
}