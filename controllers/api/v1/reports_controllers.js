const Report = require('../../../models/report');

module.exports.create = async function(req, res){
    try{
        let report = await Report.create({
            date: req.body.date,
            status: req.body.status,
            doctor: req.query.docid,
            patient: req.query.id,
        })
        return res.json(200, {
            message: "report successfully created",
            report: report,
        });
    }
    catch(err){
        console.log(err);
        return res.json(401, {
            message: "Internal Server Error",
        })
    }
}

module.exports.allStatus = async function(req, res){
    try{
        let reports = await Report.find({status: req.params.status});
        return res.json(200, {
            message: "All data of a status",
            data: {
                reports: reports,
            }
        })
    }
    catch(err){
        console.log(err);
        return res.json(401, {
            message: "Internal Server Error",
        })
    }
}