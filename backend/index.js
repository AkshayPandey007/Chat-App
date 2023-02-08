const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()


app.use(cors())
app.use(express.json())

const server = app.listen(process.env.PORT , async()=>{
  try{
    await process.env.MONGO_URL
    console.log("connected to DB successfully")
  }
  catch{
    console.log("connecting DB error")
  }
  console.log(`Listening on port ${process.env.PORT}`)
})
