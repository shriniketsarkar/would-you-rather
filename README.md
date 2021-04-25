# Would You Rather

Would You Rather is a website which allows the user to login, create questions, answer question and check out a leaderboard. The Leaderboard gives a view of all the other users who are answering the same questions. You can respond to other user's questions by selecting one of the two options provided in the question poll.

The questions are displayed to the user on their Home page sorted by timestamp of when the question was created. The user can see the list of questions they have answered and the ones which they are yet to respond to. There is a Results page for every question poll which indicates the votes and percentages of the responses.

## Installation and Launch Instructions
To get started developing right away:

* Install all project dependencies with `npm install`
* Start the development server with `npm start`
* Visit `localhost:3000` on web-browser of your choice.

## Project Structure for better understanding
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file used to build and run the application.
├── public
│   ├── empty-avatar.png # This avatar is used when the user does not have an avatarURL
|   |── john-doe.png # These are other avatars being used with the existing users.
|   |── sara.png
|   |── tyler.png
│   └── index.html
└── src
    ├── actions # These are redux actions that the site uses to manage state
    │   ├── Files : loggedInUser, questions, users, shared.
    ├── assets # Static assets such as logos used in the app.
    │   ├── Files : logo.png and your-vote.png
    ├── components # React components used in the site.
    │   ├── These handle Home, Leaderboard, Login, Navigation, NewQuestion, Question Results, User Score, etc
    ├── middlewares # Middlewares used in the site with React-Redux
    │   ├── logger # Middleware to handle console logging of Redux actions.
    ├── reducers # These are redux reducers that the site uses to manage state
    │   ├── Files : loggedInUser, questions, users.
    ├── utils # This folder includes all the DATA api needed for the site
    │   ├── _DATA.js : Initial design provided by Udacity to use as a database.
    │   ├── dataAPI.js : APIs wrapped around the DATA to consume it efficiently.
    ├── App.css # Styles for the Would You Rather app.
    ├── App.js # This is the root of the Would You Rather app.
    ├── App.test.js # Used for testing. But not implemented yet.
    ├── index.css # Global styles.
    └── index.js # Main render point for our application. Wraps the app with our Redux store provider for easier usage withing the application.
```

## Backend Server

The provided file [`dataAPI.js`](src/utils/dataAPI.js) contains the methods for performing necessary operations on the backend:

* [`getDataForInitialLoad`](#getDataForInitialLoad)
* [`saveQuestion`](#saveQuestion)
* [`saveQuestionAnswer`](#saveQuestionAnswer)

### `getDataForInitialLoad`

Method Signature:

```js
getDataForInitialLoad()
```

* Returns a Promise which resolves to a JSON object containing a collection of users and questions for the site.

### `saveQuestion`

Method Signature:

```js
saveQuestion(question)
```

* question: `<Object>` containing necessary data to store the question in our store.

### `saveQuestionAnswer`

Method Signature:

```js
saveQuestionAnswer(answer)
```

* answer: `<Object>` container necessary data to store as an answer for a question in the store.
* This operation handles storing the answer for the respective user and updating the question in the questions store.
