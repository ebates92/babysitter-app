const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const keys = require('./keys')

passport.use(new FacebookStrategy({
    // options for the Facebook strategy
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret
    }, () => {
        // passport callback function
    })
)