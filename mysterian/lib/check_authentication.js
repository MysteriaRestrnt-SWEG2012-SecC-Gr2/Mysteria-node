module.exports = {
    isLoggedin(req, res, next) {
        if (req.session.userID) {
            return next();
        }
        return res.redirect('/auth/signup');
    },

    isNotLoggedin(req, res, next) {
        if (!req.session.userID) {
            return next();
        }
        return res.redirect('/');
    }

}