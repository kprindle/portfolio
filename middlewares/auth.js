//checks if user is authenticated
exports.isLoggedIn = (req, res, next)=> {
    if(req.session.admin){
        return next();
    } else {
        req.flash('error', 'You need to log in first')
        return res.redirect('/login');
    }
};