import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser()); // user id만 쿠키를 통해서 전달하는 shortcut function
passport.deserializeUser(User.deserializeUser()); // user id를 통해서 어떻게 사용자를 식별하는가?