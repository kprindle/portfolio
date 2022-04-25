const {validationResult} = require('express-validator');
const {body} = require('express-validator');

exports.validateId = (req, res, next) => {
    let id = req.params.id;
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid story id');
        err.status = 400;
        return next(err);
    } else {
        return next();
    }
};

exports.validateSignUp = [body('firstName', 'First name cannot be empty').notEmpty().trim().escape(),
body('lastName', 'Last name cannot be empty').notEmpty().trim().escape(),
body('email', 'Email Must be valid email address').isEmail().trim().escape().normalizeEmail(),
body('password', 'password must be at least 8 characters and at most 64 characters').isLength({min: 8, max: 64})];

exports.validateLogIn = [body('email', 'Email Must be valid email address').isEmail().trim().escape().normalizeEmail(), 
body('password', 'password must be at least 8 characters and at most 64 characters').isLength({min: 8, max: 64})];

exports.validateResult = (req, res, next) => {
    let errors = validationResult(req);
    if(!errors.isEmpty()){
        errors.array().forEach(error =>{
            req.flash('error', error.msg);
        });
        return res.redirect('back');
    } else {
        return next();
    }
};

exports.validateConnection = [body('title', 'Title cannot be empty').notEmpty().trim().escape(),
body('details', 'Details must be at least 10 characters').isLength({min: 10}).trim().escape(),
body('location', 'location cannot be empty').notEmpty().trim().escape(),
body('hostName', 'host cannot be empty').notEmpty().trim().escape()]