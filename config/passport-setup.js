const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const LinkedInStrategy = require('passport-linkedin-oauth2');
const keys = require('./keys')

passport.use(new FacebookStrategy({
    // options for the Facebook strategy
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret
    }), () => {
        // passport callback function
    }
)
passport.use(new LinkedInStrategy({
    clientID: keys.linkedin.clientID,
    clientSecret: keys.linkedin.clientSecret
    // options for the LinkedIn strategy
    }), () => {
        // passport callback function
    }
)