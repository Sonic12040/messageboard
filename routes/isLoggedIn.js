module.exports = function(req, res, next){
    if (req.User) return next();  
        res.redirect('/');
}