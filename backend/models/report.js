const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReportSchema = new Schema({
    Nreport: {
        type: String,
        required: true
    },
    usuario:{
        type: Schema.ObjectID,
        ref:'user',
        required:true
    },
    postR:{
        type: Schema.ObjectID,
        ref:'comment',
        required: true
    },
    status:{
        type:String,
        enum:[
            'active',
            'inactive',
            'pending'
        ],
        default:'pending'
    }
})

module.exports = mongoose.model('report', ReportSchema);