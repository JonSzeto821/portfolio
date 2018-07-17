const initialState = {
  about: {
    name: 'Jon Szeto',
    image: '../assets/HTML5_Logo.svg',
    bio: 'front-end engineer in training..... Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar massa in tincidunt placerat. Nullam et tempus erat. Suspendisse fermentum, turpis non vehicula auctor, mi orci euismod purus, eu placerat arcu augue at risus. Fusce ex magna, vestibulum vel neque in, interdum tempor erat. Proin tortor nisi, tristique eget vestibulum nec, fringilla eu ex. Praesent blandit orci mi, at mattis tellus condimentum et.',
    links: {
      github: 'https://github.com/JonSzeto821',
      linkedin: 'https://linkedin.com/in/JonathanSzeto',
      contact: {
        email: 'mailto:JonSzeto821@gmail.com'
      },
      test: 'testVALSDFAD'
    }
  },
  project: [
    {
      name: 'Spotify Top Artists by Country',
      image: '../assets/HTML5_Logo.svg',
      description:
        'The application was developed with the objective of identifying the top artists, via Spotify API, based on country.',
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
          logo: '../assets/JQuery_Logo.svg',
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
      image: '../assets/Redux_Logo.svg',
      description:
        'Soccer Tactics was built with the intention of sharing football tactics. The app allows users to create/fork/modify/share soccer formations and in-game strategy',
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
          logo: '../assets/JQuery_Logo.svg', 
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
      ],
      links: {
        github: 'https://github.com/JonSzeto821/thinkful-fullstack-capstone',
        application: 'https://soccertactics.herokuapp.com/'
      }
    },
    {
      name: 'Nutrition Search',
      image: '../assets/ReactJs_Logo.svg',
      description:
        'The application was developed for users who track macronutrients. It allows users to search for food items, based on restaurant, and create a running total of nutritional information.',
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
      image: '../assets/Yarn_Logo.svg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin mauris et augue volutpat, in bibendum nisl ultrices. Pellentesque ac nisl eu odio finibus faucibus. In blandit lobortis lacus quis fermentum. ',
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
          logo: '../assets/JQuery_Logo.svg',
          altText: 'jQuery Logo'
        }
      ],
      links: {
        github: '',
        application: '/'
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
    image: '../assets/icons/music_icon.svg',
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
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
