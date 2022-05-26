# LINGO

## A language learning app!

## Purpose
Create an application that allows users to create a log-in and then log into the app, allows users once logged in to create decks of vocabulary cards to assist in learning another language, and give the users options to create new "flash cards," edit existing cards, and delete cards and entire decks.

## User Experience
* When a user visits the page, they are greeted with an attractive image and interactive elements inviting them to begin their work in the app.
* When a user logs in, they can go either to the "edit" page or the "drill" page. 
* On the edit page, users can create and modify the languane learning flash cards they have created. When these are created or modified, they are stored in a mySQL database, and only the owner of the decks and cards can access those decks and cards.
* On the drill page, users can select the deck they want to study. It will display cards to the user and allow the user to determine whether they got the card correct pr incorrect.
* Based on the feedback of the user, the app uses an algorithm called "supermemo" to determine how often that card should be reviewed. If the card is well know, the algorithm puts review off for a period of time. If the card is relatively unknown, the algorithm places it in the review queue much sooner.

## Built With
* Supermemo
* Node.js
* JavaScript
* HTML
* Handlebars
* Bootstrap
* Popper.js

* mySQL
* Express Server
* and deployed to Heroku

## Contributors
* Russell Chandler
* Michael Kendrick
* Chris Warren
* Matthew Wiser
