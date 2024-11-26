import mongoose, { Schema } from "mongoose";



const patientSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],

    },
    email: {
        type: String,
        required: [true, "Eamil is required"],
        unique: true,
        match: /.+\@.+\..+/ ,
        lowercase: true,
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone number is required"]
    },

    gender:{
        type:String,
        enum:["male","female","other"],
    },
    birthDate:{
        type: String,
        default: "Not selected"
    },
    address:{
        type: String,
        required: true
    },
    profilePicture:{
        type: String,

    }



},{timestamps:true})



export const patientModel = mongoose.models.patient || mongoose.model("patient", patientSchema)