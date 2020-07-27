const mongoose = require('mongoose');

// =================================defining the patient schema======================================

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    }
},{
    timestamps: true,
}
);

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;