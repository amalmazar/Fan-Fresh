var Nightmare = require("nightmare");

// STORY: As a developer nerd, I want to be able to take courses on web tech.
new Nightmare({ show: true })
    // Visit login page
    .goto("http://localhost:3000/signup")
    // Enter email.
    .type("#email", "jsmith@gmail.com")
    // Enter first name.
    .type("#firstname", "John")
    // Enter las name.
    .type("#lastname", "Smith")
    // Enter password.
    .type("#password", "dummy*password")
    // Take a screenshot of the login form.
    .screenshot("signup.png")
    // Click login button. Always check if you've done this where necessary!
    // It's easy to forget.
    .click("#submit")
    // Visit homepage
    .goto("http://localhost:3000/home")
    // Take a screenshot and save it to the current directory.
    .screenshot("homepage.png")
    // End test
    .end()
    // Execute commands
    .then(function() {
        console.log("Done!");
    })
    // Catch errors
    .catch(function(err) {
        console.log(err);
    });