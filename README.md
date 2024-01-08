This project has the purpose to offer a template of :

    1/ setting up an automated sending mail contact form with gmail service, nextjs and nodemailer packages
    2/ connect with a mongoDB database

## Getting Started

Needed packages : 

npm install react-hook-form
npm install nodemailer @types/nodemailer
npm install mongodb

## Configuring email secrets

.env --> 
MY_EMAIL=example@gmail.com
MY_PASSWORD=yourPwd (go to the link below to generate yours)

credits to : https://medium.com/@abilsavio/email-contact-form-using-nextjs-app-router-60c29fe70644


## Configuring MongoDB secrets

.env -->
MONGODB_URI=mongodb+srv://[user]:[password]@[collection]mongodb.net/?retryWrites=true&w=majority

## Basic Debug 

Whether building errors occured on route handling, uncomment the section in next.config.js