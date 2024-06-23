const mongoose = require('mongoose');
const { Schema } = mongoose;

const fullFile = new mongoose.Schema({
    projectId: {
        type: Number,
        unique: true,
        default: 1000, // Starting project ID
    },
    SR: {
        type: String,
        // required: true,
    },
    PICTURE: {
        type: String,
        default: null,
        // required: true,
    },
    STYLE: {
        type: String,
        // required: true,
    },
    FABRIC: {
        type: String,
        // required: true,
    },
    VONDOR: {
        type: String,
        // required: true,
    },
    AUDIT: {
        type: String,
        // required: true,
    },
    XXS: {
        type: String,
        // required: true,
    },
    XS: {
        type: String,
        // required: true,
    },
    S: {
        type: String,
        // required: true,
    },
    M: {
        type: String,
        // required: true,
    },
    L: {
        type: String,
        // required: true,
    },
    XL: {
        type: String,
        // required: true,
    },
    XXL: {
        type: String,
        // required: true,
    },
    TOTAL: {
        type: String,
        // required: true,
    },
    DATE: {
        type: Date,
        // required: true,
    },
    LAB: {
        type: String,
        default: null,
        // required: true,
    },
    PROTO: {
        type: String,
        default: null,
        // required: true,
    },
    PPS: {
        type: String,
        // required: true,
    },
    YARN: {
        type: String,
        default: null,
        // required: true,
    },
    KNITTING_START_DATE: {
        type: String,
    },
    KNITTING_END_DATE: {
        type: String,
    },
    DYEING_START_DATE: {
        type: String,
    },
    DYEING_END_DATE: {
        type: String,
    },
    CUTTING_START_DATE: {
        type: String,
    },
    CUTTING_END_DATE: {
        type: String,
    },
    EMBELLISHMENT_START_DATE: {
        type: String,
    },
    EMBELLISHMENT_END_DATE: {
        type: String,
    },
    SEWING_START_DATE: {
        type: String,
    },
    SEWING_END_DATE: {
        type: String,
    },
    FINISHING_START_DATE: {
        type: String,
    },
    FINISHING_END_DATE: {
        type: String,
    },
    PACKING_START_DATE: {
        type: String,
    },
    PACKING_END_DATE: {
        type: String,
    },
    AUDIT: {
        type: String,
        default: null,
    },
    REMARKS: {
        type: String,
        default: null,
    },
});


// Middleware to auto-increment the projectId before saving
fullFile.pre('save', async function (next) {
    if (!this.isNew) {
      return next();
    }
    const Project = this.constructor;
    const lastProject = await Project.findOne({}, {}, { sort: { projectId: -1 } });
    this.projectId = (lastProject ? lastProject.projectId : 999) + 1;
    next();
  });


const FileModel = mongoose.models.excelfile || mongoose.model('excelfile', fullFile);
module.exports = FileModel;
