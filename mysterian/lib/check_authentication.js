module.exports = {
    isLoggedin(req, res, next) {
        if (req.session.userID) {
            console.log("isLoggedin");
            return next();
        }
        return res.redirect('http://localhost:5500');
    },

    isNotLoggedin(req, res, next) {
        if (!req.session.userID) {
            return next();
        }
        return res.redirect('/');
    }

}