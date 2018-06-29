const initialState = {
  about: {
    name: 'Jon Szeto',
    image: 'image.file',
    bio: 'front-end engineer in training',
    links: {
      github: 'https://github.com/JonSzeto821',
      linkedin: 'https://linkedin.com',
      contact: {
        email: 'JonSzeto821@gmail.com'
      }
    }
  },
  project: {
    project1: {
      name: 'Spotify Top Artists by Country',
      image: 'cat.svg',
      description:
        'The application was developed with the objective of identifying the top artists, via Spotify API, based on country.',
      technology: [
        {
          name: 'HTML',
          logo: 'require(../../styles/assets/HTML5_Logo.svg)',
          altText: 'HTML Logo'
        },
        {
          name: 'CSS',
          logo:
            'https://www.colourbox.com/preview/4560591-angry-businessman-with-bat-on-white.jpg',
          altText: 'CSS Logo'
        },
        {
          name: 'JavaScript',
          logo:
            'https://www.colourbox.com/preview/4560591-angry-businessman-with-bat-on-white.jpg',
          altText: 'JavaScript Logo'
        },
        {
          name: 'jQuery',
          logo:
            'https://www.colourbox.com/preview/4560591-angry-businessman-with-bat-on-white.jpg',
          altText: 'jQuery Logo'
        }
      ],
      links: {
        github: 'https://github.com/JonSzeto821/ThinkfulSpotifyCapstone',
        application: 'https://spotify-cap.herokuapp.com/'
      }
    },
    project2: {
      name: 'Soccer Tactics',
      image: 'dog.png',
      description:
        'Soccer Tactics was built with the intention of sharing football tactics. The app allows users to create/fork/modify/share soccer formations and in-game strategy',
      technology: [
        {
          name: 'HTML',
          logo:
            'https://www.colourbox.com/preview/4560591-angry-businessman-with-bat-on-white.jpg',
          altText: 'HTML Logo'
        },
        {
          name: 'CSS',
          logo:
            'https://www.colourbox.com/preview/4560591-angry-businessman-with-bat-on-white.jpg',
          altText: 'CSS Logo'
        },
        {
          name: 'JavaScript',
          logo:
            'https://www.colourbox.com/preview/4560591-angry-businessman-with-bat-on-white.jpg',
          altText: 'JavaScript Logo'
        },
        {
          name: 'jQuery',
          logo:
            'https://www.colourbox.com/preview/4560591-angry-businessman-with-bat-on-white.jpg',
          altText: 'jQuery Logo'
        },
        {
          name: 'Express',
          logo:
            'https://www.colourbox.com/preview/4560591-angry-businessman-with-bat-on-white.jpg',
          altText: 'Express Logo'
        },
        {
          name: 'Node.Js',
          logo:
            'https://www.colourbox.com/preview/4560591-angry-businessman-with-bat-on-white.jpg',
          altText: 'Node.Js Logo'
        }
      ],
      links: {
        github: 'https://github.com/JonSzeto821/thinkful-fullstack-capstone',
        application: 'https://soccertactics.herokuapp.com/'
      }
    },
    project3: {
      name: 'Nutrition Search',
      image: 'goat.png',
      description:
        'The application was developed for users who track their macronutrients. It allows users to search for food items, based on restaurant, and create a running total of nutritional information.',
      technology: [
        {
          name: 'HTML',
          logo:
            'https://www.colourbox.com/preview/4560591-angry-businessman-with-bat-on-white.jpg',
          altText: 'HTML Logo'
        },
        {
          name: 'CSS',
          logo:
            'https://www.colourbox.com/preview/4560591-angry-businessman-with-bat-on-white.jpg',
          altText: 'CSS Logo'
        },
        {
          name: 'JavaScript',
          logo:
            'https://www.colourbox.com/preview/4560591-angry-businessman-with-bat-on-white.jpg',
          altText: 'JavaScript Logo'
        },
        {
          name: 'React.Js',
          logo:
            'https://www.colourbox.com/preview/4560591-angry-businessman-with-bat-on-white.jpg',
          altText: 'React.Js Logo'
        }
      ],
      links: {
        github: 'https://github.com/JonSzeto821/thinkful-react-project',
        application: 'https://mactotal.netlify.com/'
      }
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
