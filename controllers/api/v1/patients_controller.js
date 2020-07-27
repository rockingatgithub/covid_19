const pat = require('../../../models/patient');
const Patient = require('../../../models/patient');
const Report = require('../../../models/report');


// ============================registering patients if not already present===============================


module.exports.create = async function(req, res){
    try{
        let patient = await pat.findOne({phoneNumber: req.body.phoneNumber});
        if(!patient){
            patient = await pat.create({
                name: req.body.name,
                phoneNumber:req.body.phoneNumber,
                doctor: req.query.docid,
            });
        }
        return res.status(200).json({
            message: "patient successfully registered",
            patient: patient,
        });
    }
    catch(err){
        console.log(err);
        return res.status(401).json({
            message: "Internal Server Error",
        });
    }
}


// ==================================getting all reports of a patients================================


module.exports.allReports = async function(req, res){
    try{
        let reports = await Report.find({patient: req.params.id});
        return res.status(200).json({
            message: "all report for patient",
            reports: reports,
        })
    }
    catch(err){
        console.log(err);
        return res.status(401).json({
            message: "Internal Server Error",
        });
    }
}
