const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/fmabattage")

/* Formulaire */
const messageSchema = new mongoose.Schema({
    nom: String,
    email: String,
    message: String
})

const Message = mongoose.model("Message", messageSchema)

app.post("/contact", async (req,res)=>{
    const message = new Message(req.body)
    await message.save()
    res.json({status:"Message enregistré"})
})

app.listen(3000, ()=>{
    console.log("Serveur lancé sur port 3000")
})

/* Témoignages */

const avisSchema = new mongoose.Schema({
    nom:String,
    message:String,
    note:Number
})

const Avis = mongoose.model("Avis", avisSchema)

app.post("/avis", async(req,res)=>{
    const avis = new Avis(req.body)
    await avis.save()
    res.json({status:"Avis enregistré"})
})

app.get("/avis", async(req,res)=>{
    const avis = await Avis.find()
    res.json(avis)
})