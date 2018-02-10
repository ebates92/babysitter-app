const passport = require('passport');
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const keys = require('./keys')

passport.use(new LinkedInStrategy({
    clientID: keys.linkedin.clientID,
    clientSecret: keys.linkedin.clientSecret,
    callbackURL:'/auth/linked-in/callback',
    // options for the LinkedIn strategy
    scope: ['emailaddress', 'basicprofile'],
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        process.nextTick(()=>{


            return done(null, profile);
        })
    })
)


app.get('/auth/linkedin',
passport.authenticate('linkedin', {state: "Some State"}),
    (req, res)=> {

})

module.exports = passport;