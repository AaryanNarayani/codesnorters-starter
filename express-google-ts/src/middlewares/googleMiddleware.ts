const GoogleStrategy = require("passport-google-oauth20").Strategy;
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Profile } from 'passport-google-oauth20';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
   throw new Error('JWT_SECRET is not defined in environment variables');
}

passport.use(
   new GoogleStrategy(
       {
           clientID: process.env.CLIENT_ID,
           clientSecret: process.env.CLIENT_SECRET,
           callbackURL: "http://localhost:3000/api/v1/auth/google/callback",
           scope: ["profile", "email"]
       },
       async function (
           _accessToken: string, 
           _refreshToken: string, 
           profile: Profile, 
           callback: (error: any, user?: any) => void
       ) {
           try {
               const googleEmail = profile.emails?.[0].value;
               const googleAvatar = profile.photos?.[0]?.value;

               if (!googleEmail) {
                   throw new Error("No email provided from Google");
               }
                // Here you would typically check if the user exists in your database
                // For demonstration, we will create a mock user object

                const user = { 
                    uuid: profile.id,
                    email: googleEmail,
                    name: profile.displayName,
                    avatar: googleAvatar || "https://example.com/default-avatar.png",
                };
                // In a real application, you would save the user to your database here
               const token = jwt.sign(
                   { id: user.uuid, email: googleEmail }, 
                   String(JWT_SECRET),
                   { expiresIn: "3h" }
               );

               callback(null, { ...user, token });
           } catch (error) {
               console.error("Error in Google Strategy:", error);
               callback(error);
           }
       }
   )
);

// Serialize user for the session
passport.serializeUser((user: any, done) => {
   done(null, user);
});

// Deserialize user from the session
passport.deserializeUser((user: any, done) => {
   done(null, user);
});

export default passport;