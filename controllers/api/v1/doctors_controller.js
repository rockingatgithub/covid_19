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
            return res.json(401, {
                message: 'Passwords dont match',
            })
        }
        let docex = await Doc.findOne({email: req.body.email});
        if(docex){
            return res.json(200, {
                message: 'Please Sign In',
            });
        }
        else{
            let newDoc = await Doc.create(req.body);

            let doc = await newDoc.populate('name', 'email').execPopulate();
            
            return res.json(200, {
                message: 'message sent',
                data: {
                    doc: newDoc,
                }
            })
        }
    }
    catch(err){
        console.log(err);
        return res.json(401, {
            message: 'Internal Server Error',
        })
    }
}

module.exports.createSession =  function(req, res){
    try{
        return res.json(200, {
            message: 'login successful',
        });
    }
    catch(err){
        console.log(err);
        return res.json(401, {
            message: 'Internal Server Error',
        })
    }
}

module.exports.signin = async function(req, res){


    return res.render('doc_signin');



    // try{
    //     let doc = await Doctor.findOne({email: req.body.email});

    //     if(doc){
    //         if(doc.password !== req.body.password){
    //             return res.json(401, {
    //                 message: 'Invalid User name password',
    //             });
    //         }
    //         return res.json(200, {
    //             message: 'message sent',
    //             data: {
    //                 doc: newDoc,
    //             }
    //         });
    //     }
    //     else{
    //         return res.json(401, {
    //             message: 'Invalid User name password',
    //         });
    //     }
    // }
    // catch(err){
    //     console.log(err);
    //     return res.json(401, {
    //         message: 'Internal Server Error',
    //     });
    // }
}


module.exports.createSession2 = async function(req, res){
    try{
        let doc = await Doc.findOne({email: req.body.email});

        if(!doc || doc.password != req.body.password){
            return res.json(422, {
                message: "Invalid username or password",
            });
        }
        return res.json(200, {
            message: "Sign in successfull here is your token",
            data: {
                token: jwt.sign(doc.toJSON(), 'hospital_api', {expiresIn: '100000'}),
            }
        })
    }
    catch(err){
        console.log(err);
        return res.json(401, {
            message: 'Internal Server Error',
        })
    }
}