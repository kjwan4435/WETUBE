import routes from "../routes";
import User from "../models/User";
import passport from "passport";

// global
export const getJoin = (req, res, next) =>
    res.render("join", { pageTitle: "Join" });

export const postJoin = async (req, res, next) => {
    const {
        body: { name, email, password, password2 },
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        try {
            const user = await User({
                name,
                email,
            });
            await User.register(user, password);
            next();
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
};

export const getLogin = (req, res) =>
    res.render("login", { pageTitle: "login" });
export const postLogin = passport.authenticate("local", {
    successRedirect: routes.home,
    failureRedirect: routes.login,
});

export const logout = async (req, res) => {
    req.session.destroy(function (err) {});
    res.redirect(routes.home);
};

// users
export const users = (req, res) => res.render("users", { pageTitle: "users" });
export const editProfile = (req, res) =>
    res.render("editProfile", { pageTitle: "editProfile" });
export const changePassword = (req, res) =>
    res.render("changePassword", { pageTitle: "changePassword" });
export const userDetail = (req, res) =>
    res.render("userDetail", { pageTitle: "userDetail" });
