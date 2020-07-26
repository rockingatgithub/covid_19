const Doc = require('../../../models/doctor');
const jwt = require('jsonwebtoken');

module.exports.home = async function(req, res){
    return res.render('docViews');
}

module.exports.signup = function(req, res){
    return res.render('doctor_regis');
}

module.exports.profile = function(req, res){
    return res.render('doc_profile');
}

module.exports.create = async function(req, res){
    try{
        // console.log(req.body);
        if(req.body.password !== req.body.confirm_password){
            return res.status(401).json({
                message: 'Passwords dont match',
            })
        }
        let docex = await Doc.findOne({email: req.body.email});
        if(docex){
            return res.status(200).json({
                message: 'Please Sign In',
            });
        }
        else{
            let newDoc = await Doc.create(req.body);

            // let doc = await newDoc.populate('name', 'email').execPopulate();
            
            return res.status(200).json({
                message: 'message sent',
                data: {
                    doc: newDoc,
                }
            })
        }
    }
    catch(err){
        console.log(err);
        return res.status(401).json({
            message: 'Internal Server Error',
        })
    }
}

module.exports.createSession =  function(req, res){
    try{
        return res.status(200).json({
            message: 'login successful',
        });
    }
    catch(err){
        console.log(err);
        return res.status(401).json({
            message: 'Internal Server Error',
        })
    }
}

module.exports.signin = async function(req, res){


    return res.render('doc_signin');

}


module.exports.createSession2 = async function(req, res){
    try{
        let doc = await Doc.findOne({email: req.body.email});

        if(!doc || doc.password != req.body.password){
            return res.status(422).json({
                message: "Invalid username or password",
            });
        }
        return res.status(200).json({
            message: "Sign in successfull here is your token",
            data: {
                token: jwt.sign(doc.toJSON(), 'hospital_api', {expiresIn: '1000000'}),
            }
        })
    }
    catch(err){
        console.log(err);
        return res.status(401).json({
            message: 'Internal Server Error',
        })
    }
}