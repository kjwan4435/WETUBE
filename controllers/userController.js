import routes from "../routes";

// global
export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });

export const postJoin = (req, res) => {
    const {
        body: { name, email, password, password2 },
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        // register user
        // Log user in
        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) =>
    res.render("login", { pageTitle: "login" });
export const postLogin = (req, res) => {
    const {
        body: { email, password },
    } = req;
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    // TODO: PROCESS LOGOUT
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
