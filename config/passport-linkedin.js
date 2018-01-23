const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2');
const keys = require('./keys')

passport.use(new LinkedInStrategy({
    clientID: keys.linkedin.clientID,
    clientSecret: keys.linkedin.clientSecret
    // options for the LinkedIn strategy
    }, () => {
        // passport callback function
    })
)