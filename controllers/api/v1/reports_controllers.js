const Report = require('../../../models/report');

module.exports.create = async function(req, res){
    try{
        let report = await Report.create({
            date: req.body.date,
            status: req.body.status,
            doctor: req.query.docid,
            patient: req.query.id,
        })
        return res.status(200).json({
            message: "report successfully created",
            report: report,
        });
    }
    catch(err){
        console.log(err);
        return res.status(401).json({
            message: "Internal Server Error",
        })
    }
}

module.exports.allStatus = async function(req, res){
    try{
        let reports = await Report.find({status: req.params.status});
        return res.status(200).json({
            message: "All data of a status",
            data: {
                reports: reports,
            }
        })
    }
    catch(err){
        console.log(err);
        return res.status(401).json({
            message: "Internal Server Error",
        })
    }
}