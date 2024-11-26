
import fs from 'fs'
import { v2 as cloudinary } from 'cloudinary'


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return null
        }
        const uploadedFile = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log("File uploaded successfully on cloudinary")
        console.log(uploadedFile)
        return uploadedFile
    } catch (error) {
        fs.unlinkSync(localFilePath)
        console.log("Error uploading file on cloudinary")
        return null
    }
}

cloudinary.v2.uploader
    .upload("/home/sample.jpg")
    .then(result => console.log(result));