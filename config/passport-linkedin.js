const passport = require('passport');
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const keys = require('./keys')

passport.use(new LinkedInStrategy({
    clientID: keys.linkedin.clientID,
    clientSecret: keys.linkedin.clientSecret,
    callbackURL:'/auth/linked-in/callback'
    // options for the LinkedIn strategy
    }, () => {
        // passport callback function
    })
)

module.exports = passport;