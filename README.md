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

## UX with request response

In order to deal with request response and improve the user experience, status response is displayed at the bottom of component pages.  
Request succed → status 200  
Request failed → status 500

it is possible to adapt the app behavior with a file located in public/yourFile.ts/js. An example below :  

```javascript  

// public/handleButton.js

let flag = false;

function  upStat () {
    if (flag) return;

    if (document.getElementById("stat").innerHTML == 0) {
        return;
    // Initial request status.
    }
    flag = true; 

    if (document.getElementById("stat").innerHTML == 200) {
        document.getElementById("emailButton").innerHTML = '<p id="sentMessageT">Thank you for your message ✓</p>'
    // Displaying confirmation message if status = 200.
    }
    else if (document.getElementById("stat").innerHTML == 500) {
        document.getElementById("emailButton").innerHTML = '<p id="sentMessageF">Your message was not sent.</p>' 
    // Displaying error message if status = 500 (internal servor error).
    }  
}
// You may need to treat the css to display these messages or not in JS.

window.setInterval(upStat, 500);
```

Feel free to make it your own, handling multiple email requests by stopping to display the submit button, for example. 

## App diagram 

[App diagram (pdf)](doc/nextjs-connect-app-diagram.pdf)

## Basic Debug 

Whether building errors occured on route handling, uncomment the section in next.config.js