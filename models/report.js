const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'],
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Doctor',
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Patient',
    }
},{
    timestamps: true,
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;