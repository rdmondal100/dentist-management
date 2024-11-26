import express from "express"
import cors from 'cors'
import cookeParser from 'cookie-parser'
import { whitelist } from "./constants.js"

const app = express()

//cors origin whitelist
// var corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     },
//     credentials: true
// }


//middlewires
app.use(cors())
app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookeParser())


//routes
import doctorRouter from './routes/doctorRoute.js'

app.use("/api/v1/doctor",doctorRouter)


export { app }