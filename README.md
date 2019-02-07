# STREAK TRIVIA

## DESCRIPTION
STREAK TRIVIA is a game that tests your knowledge across a wide variety of topics.
Questions are three-part multiple choice. Goal is to answer as many questions in a row as possible,
and claim the highest streak.

This repository is the front-end. The back-end can be found here: https://github.com/pcherian10/streak-trivia-app-api

## FUNCTIONALITY:
The following are the core functionality components of STEAK Trivia -- users can:

Login/Signup, protected with bcrypt
Play a game
  - game only does not repeat questions and user only sees questions from other users.
Submit a question of his/her own.
View rankings based on highest-streak.


## DEVELOPMENT / FRAMEWORKS:

Front-end: The front end was developed using Javascript, using the React and Redux frameworks.
Only outside module used is semantic-ui for visual presentation.

Back-end: The back end was built on Ruby on Rails, linking to a postgres database. Outside gems include:

bcrypt, for password authentication
serializer, for cleaner data delivery to the front-end

## ORGANIZATION:

Front-end:

Index.js loads the App.js, which, if a user is logged in, loads data from the backend.
App.js loads Navbar.js which manages most of the application's routing to various components.

There is only one rootReducer.js, which use combineReducer function from react-redux library to combine user and questionReducer.

All actions are defined in an actions folder.
Main communication with Rails API is done in the adaptors/api folder.

Back-end:

The backend uses a RESTful structure. The auth and application controllers manage login authentication. The rest are namespaced controllers based on model. There are two serializers for users and questions.

## TO RUN THE APPLICATION:

Front-end:

Run npm install
Run npm start
Back-end:

Run bundle install
Run rails db:migrate
Run rails db:seed (for sample questions)
Run rails s -p 3001

Copyright 2018 Paul Cherian

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
