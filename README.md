# game-platform-webapplication

A dynamic web application demonstrating a Games page, Events (announcements) page, Communities section, and user authentication (login/sign up). The project uses Node.js, Express.js, Pug as a templating engine, and Bootstrap for styling.

About the App
MyApp is designed to showcase essential features of a modern web platform:

Games: Displays a list of games, each with a detail page where users can leave feedback (reviews).

Events (Announcements): Showcases upcoming events, grouped by categories (e.g., hot events, sport events, general events), with a detail page for booking and commenting.

Communities: Allows users to see different communities, join/follow them, and see membership counts.

Authentication: Provides user sign-up and login routes, with session-based login state.

GitHub Repo & Hosted Link
GitHub Repository: https://github.com/KhamidovDoniyor22/game-platform-webapplication
Hosted Link (vercel): game-platform-webapplication.vercel.app



Below is the structure, following:
game-platform-webapplication/
├── app.js
├── package.json
├── controllers/
│   ├── authController.js
│   ├── gamesController.js
│   ├── announcementsController.js
│   └── communitiesController.js
│   └── feedbackController.js
├── routes/
│   ├── auth.js
│   ├── games.js
│   ├── announcements.js
│   └── communities.js
│   └── feedback.js
├── views/
│   ├── layout.pug
│   ├── home.pug
│   ├── login.pug
│   ├── signup.pug
│   ├── games.pug
│   ├── game.pug
│   ├── announcements.pug
│   ├── announcement.pug
│   ├── communities.pug
│   └── community.pug
└── public/
    ├── images/
    └── styles/
        └── style.css
