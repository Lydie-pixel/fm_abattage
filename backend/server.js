const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const testimonialRoutes = require("./routes/testimonialRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// connexion MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connecté"))
.catch(err => console.log(err));

// routes API
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/contacts", contactRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});