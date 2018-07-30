const initialState = {
  about: {
    name: 'Jon Szeto',
    image: '../assets/HTML5_Logo.svg',
    bio: {
      p1:
        'Front-end engineer in training..... I’ve had prior software development experience as a Systems Analyst. Transitioned into a customer facing role. I coordinated with software integrations teams from publishers and for-profit institutions. I provided assistance with familiarizing them to the company’s APIs and how they are used. This peaked my interest into understanding how they APIs are built. Between this and wanting to be back on a development team and building products again, led me down the engineering route.',
      p2:
        'I am currently based in Raleigh, NC. My interests include technology, live music, soccer, and powerlifting.'
    },
    links: {
      github: 'https://github.com/JonSzeto821',
      linkedin: 'https://linkedin.com/in/JonathanSzeto',
      contact: {
        email: 'mailto:JonSzeto821@gmail.com'
      }
    },
    phone: '(617) 429-3618',
    location: 'Raleigh, NC'
  },
  project: [
    {
      name: 'Spotify Global',
      screenshot: [
        {
          name: 'Desktop Viewport',
          image: '../assets/projects/spotify/spotify-desktop.png',
          altText: 'Desktop Viewport'
        },
        {
          name: 'Medium Viewport',
          image: '../assets/projects/spotify/spotify-medium.png',
          altText: 'Spotify App Image'
        },
        {
          name: 'Mobile Viewport',
          image: '../assets/projects/spotify/spotify-mobile.png',
          altText: 'Spotify App Image'
        }
      ],
      description:
        'The application was developed with the objective of identifying the current top artists based on country. The application utilizes an API created by Spotify',
      // additionalContent: '{provide link to Spotify API}',
      technology: [
        {
          name: 'HTML',
          logo: '../assets/HTML5_Logo.svg',
          altText: 'HTML Logo'
        },
        {
          name: 'CSS',
          logo: '../assets/CSS3_Logo.svg',
          altText: 'CSS Logo'
        },
        {
          name: 'JavaScript',
          logo: '../assets/JS_Logo.svg',
          altText: 'JavaScript Logo'
        },
        {
          name: 'jQuery',
          logo: '../assets/Jquery-Logo.svg',
          altText: 'jQuery Logo'
        }
      ],
      links: {
        github: 'https://github.com/JonSzeto821/ThinkfulSpotifyCapstone',
        application: 'https://spotify-cap.herokuapp.com/'
      }
    },
    {
      name: 'Soccer Tactics',
      screenshot: [
        {
          name: 'screenshot1',
          image: '../assets/projects/soccer/read-me.png',
          altText: 'Instructions Page'
        },
        {
          name: 'screenshot2',
          image: '../assets/projects/soccer/formation-list.png',
          altText: 'Formation List Page'
        },
        {
          name: 'screenshot3',
          image: '../assets/projects/soccer/formation-page.png',
          altText: 'Formation Page'
        }
      ],
      description:
        'Soccer Tactics was built with the intention of sharing football tactics. The app allows users to create, fork, modify, and share soccer formations and in-game strategy',
      additionalContent: 'Demo Username: PasswordIsTaco; Password: taco',
      technology: [
        // {
        //   name: 'HTML',
        //   logo: '../assets/HTML5_Logo.svg',
        //   altText: 'HTML Logo'
        // },
        {
          name: 'Handlebars',
          logo: '../assets/Handlebars_Logo.svg',
          altText: 'Handlebars Logo'
        },
        {
          name: 'CSS',
          logo: '../assets/CSS3_Logo.svg',
          altText: 'CSS Logo'
        },
        {
          name: 'JavaScript',
          logo: '../assets/JS_Logo.svg',
          altText: 'JavaScript Logo'
        },
        {
          name: 'jQuery',
          logo: '../assets/Jquery-Logo.svg',
          altText: 'jQuery Logo'
        },
        {
          name: 'D3.Js',
          logo: '../assets/D3_Logo.svg',
          altText: 'D3 Logo'
        },
        {
          name: 'Node.Js',
          logo: '../assets/NodeJs_Logo.svg',
          altText: 'Node.Js Logo'
        },
        {
          name: 'MongoDB',
          logo: '../assets/MongoDB2_Logo.svg',
          altText: 'MongoDB Logo'
        },
        {
          name: 'NPM',
          logo: '../assets/npm_Logo.svg',
          altText: 'NPM Logo'
        }
        // {
        //   name: 'mLab',
        //   logo: '../assets/mLab_Logo.png',
        //   altText: 'mLab Logo'
        // }
      ],
      links: {
        github: 'https://github.com/JonSzeto821/thinkful-fullstack-capstone',
        application: 'https://soccertactics.herokuapp.com/'
      }
    },
    {
      name: 'Nutrition Search',
      screenshot: [
        {
          name: 'screenshot1',
          image: '../assets/projects/nutrition/nutrition-lookup.png',
          altText: 'Instructions Page'
        },
        {
          name: 'screenshot2',
          image: '../assets/projects/nutrition/nutrition-calorie-range.png',
          altText: 'Formation List Page'
        },
        {
          name: 'screenshot3',
          image: '../assets/projects/nutrition/nutrition-review.png',
          altText: 'Formation Page'
        }
      ],
      description:
        'The application was developed for users who track macronutrients. It allows users to search for food items, based on restaurant, and create a running total of nutritional information.',
      // additionalContent: '{insert link to Nutritionix API}',
      technology: [
        {
          name: 'HTML',
          logo: '../assets/HTML5_Logo.svg',
          altText: 'HTML Logo'
        },
        {
          name: 'CSS',
          logo: '../assets/CSS3_Logo.svg',
          altText: 'CSS Logo'
        },
        {
          name: 'JavaScript',
          logo: '../assets/JS_Logo.svg',
          altText: 'JavaScript Logo'
        },
        {
          name: 'React.Js',
          logo: '../assets/ReactJs_Logo.svg',
          altText: 'React.Js Logo'
        },
        {
          name: 'Redux',
          logo: '../assets/Redux_Logo.svg',
          altText: 'Redux Logo'
        },
        {
          name: 'Yarn',
          logo: '../assets/Yarn_Logo.svg',
          altText: 'Yarn Logo'
        }
      ],
      links: {
        github: 'https://github.com/JonSzeto821/thinkful-react-project',
        application: 'https://mactotal.netlify.com/'
      }
    },
    {
      name: 'Quiz App',
      screenshot: [
        {
          name: 'quizStart',
          image: '../assets/projects/quiz/quiz-start.png',
          altText: 'Start Quiz'
        },
        {
          name: 'quizQuestion',
          image: '../assets/projects/quiz/quiz-question.png',
          altText: 'Quiz Question'
        },
        {
          name: 'quizResult',
          image: '../assets/projects/quiz/quiz-result.png',
          altText: 'Quiz Result'
        }
      ],
      description:
        'The quiz app is a Liverpool FC themed quiz that asks the user five multiple choice questions and ranks their knowledge level based on the results.',
      technology: [
        {
          name: 'HTML',
          logo: '../assets/HTML5_Logo.svg',
          altText: 'HTML Logo'
        },
        {
          name: 'CSS',
          logo: '../assets/CSS3_Logo.svg',
          altText: 'CSS Logo'
        },
        {
          name: 'JavaScript',
          logo: '../assets/JS_Logo.svg',
          altText: 'JavaScript Logo'
        },
        {
          name: 'jQuery',
          logo: '../assets/Jquery-Logo.svg',
          altText: 'jQuery Logo'
        }
      ],
      links: {
        github: 'https://github.com/JonSzeto821/quiz-app',
        application: 'https://jonszeto821.github.io/quiz-app/'
      }
    }
  ],
  carousel: {
    nav1: null,
    nav2: null
  },
  icons: [
    {
      name: 'musicIcon',
      image: '../assets/icons/headphone_icon.svg',
      altText: 'Music Icon'
    },
    {
      name: 'soccerIcon',
      image: '../assets/icons/soccer_icon.svg',
      altText: 'Soccer Icon'
    },
    {
      name: 'nutritionIcon',
      image: '../assets/icons/nutrition_icon.svg',
      altText: 'Nutrition Icon'
    },
    {
      name: 'quizIcon',
      image: '../assets/icons/quiz_icon.svg',
      altText: 'Quiz Icon'
    },
    {
      name: 'contactIcon',
      image: '../assets/icons/contact_icon.svg',
      altText: 'Contact Icon'
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
