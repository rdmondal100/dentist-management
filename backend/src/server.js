
import 'dotenv/config'
import connectDb from './config/connectDb.js'
import { app } from './app.js'




const port = process.env.PORT || 5000

connectDb()
    .then(() => {
        app.on("error", (error) => {
            console.log("Error::", error)
            throw error
        })
        app.listen(port, () => {
            console.log(`http://localhost:${port}`)
        })

    })
    .catch((error) => {
        console.log("Mongodb connection failed::", error)
        throw error
    })