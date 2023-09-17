import express from 'express'
import dotenv from 'dotenv'
import authRouter from './routes/auth.routes.js'
import ticketsRouter from './routes/tickets.routes.js'
const app = express()
dotenv.config()

app.use("/auth", authRouter)
app.use("/tickets", ticketsRouter)

app.listen(8000, () => {
  console.log("The app is running on 8000")
})