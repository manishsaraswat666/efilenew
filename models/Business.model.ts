import mongoose, {Schema} from "mongoose";

const BusinessSchema = new Schema({
   
    businessName: {
        type: String,
        required: true,
        maxlength: 100
    },
    nameControl: {type: String},
    einNo: {
        type: String,
        required: true,
    },
    businessType: {
        type: String,
        required: true,
    },
    addline1: {
        type: String,
        required: true,
        minlength: 8
    },
    addline2: {type: String},
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true
    },
    phone: {type: String},
}, {timestamps: true});

const model = mongoose.models.Business || mongoose.model("Business", BusinessSchema);
export default model;