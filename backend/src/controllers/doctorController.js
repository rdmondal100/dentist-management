
import { asyncHandler } from '../utils/asyncHandler.js'


const addDoctor = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "OK"
    })
})




export { addDoctor }