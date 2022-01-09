const passport = require('passport');
const DiscordStrategy = require('passport-discord');
const User = require('../models/database/schemas/User')

passport.serializeUser((user, done) => {
    try {
        done(null, user.discordId);
        
    } catch (error) {
        done(error,null);
    }
})

passport.deserializeUser( async (discordId, done) => {
    try {
        const user = await User.findOne({ discordId});
        return user ? done(null, user) : done(null,null);
    } catch(err) {
        console.log(err);
        done(err,null);
    }
})

passport.use( new DiscordStrategy({
    clientID: process.env.DASHBOARD_CLIENT_ID,
    clientSecret: process.env.DASHBOARD_CLIENT_SECRET,
    callbackURL: process.env.DASHBOARD_CALLBACK_URI,
    scope: ['identify','email'],
}, async(accessToken, refreshToken, profile, done) => {
    console.log(accessToken)

    try {
        const { id, username, discriminator, avatar,email, verified} = profile;

        const findUser = await User.findOneAndUpdate({discordId: id}, {
            discordTag: `${username}#${discriminator}`,
            avatar,
        }, {new: true});
        if(findUser) {
            console.log( ' User was found ');
            return done(null, findUser);
        }
        else{
            if(!verified) return done(null, null);
            const newUser = await User.create({
                discordId: id,
                discordTag: `${username}#${discriminator}`,
                avatar,
                email,
            });
            console.log("User created");
            return done(null, newUser);
        }
    }
    catch (err){
        console.log(err);
        return done(err, null);
    }
        
    
})
);