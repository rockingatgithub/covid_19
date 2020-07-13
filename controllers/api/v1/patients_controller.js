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
        return res.json(200, {
            message: "patient successfully registered",
            patient: patient,
        });
    }
    catch(err){
        console.log(err);
        return res.json(401, {
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
        return res.json(200, {
            message: "all report for patient",
            reports: reports,
        })
    }
    catch(err){
        console.log(err);
        return res.json(401, {
            message: "Internal Server Error",
        });
    }
}


// module.exports.createReport = async function(req, res){
//     try{
//         let report = await Report.create({
//             date: req.body.date,
//             status: req.body.status,
//             doctor: req.user._id,
//             patient: req.params.id,
//         })
//         return res.json(200, {
//             message: "report successfully created",
//             report: report,
//         });
//     }
//     catch(err){
//         console.log(err);
//         return res.json(401, {
//             message: "Internal Server Error",
//         })
//     }
// }