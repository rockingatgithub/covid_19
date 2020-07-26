const pat = require('../../../models/patient');
const Patient = require('../../../models/patient');
const Report = require('../../../models/report');

module.exports.signup = function(req, res){
    return res.render('pat_regis');
}

module.exports.create = async function(req, res){
    try{
        let patient = await pat.findOne({phoneNumber: req.body.phoneNumber});
        if(!patient){
            patient = await pat.create({
                name: req.body.name,
                email: req.body.email,
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

module.exports.reportForm = async function(req, res){
    let pat = await Patient.findOne({phoneNumber: req.body.phoneNumber});
    // console.log(req.body.phoneNumber);
    return res.render('pat_report_form', {
        pat: pat,
    });
}

module.exports.openReportForm = async function(req, res){
    try{
        let pat = await Patient.findById(req.params.id);
        return res.render('report_form', {
            pat: pat,
        })
    }
    catch(err){
        return res.redirect('back');
    }
}

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
