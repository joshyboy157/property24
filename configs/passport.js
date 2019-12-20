const passport = require('passport');
const Googlestrat = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
    new Googlestrat({
        key:keys.google.key
    }),() => {

    }
)