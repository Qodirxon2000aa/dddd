const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

// MongoDBga ulanish
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/", require("./routes/authRoutes"));
// ❗ Endi "/api/auth" emas, shunchaki "/" da ulandi!

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ${PORT}-portda ishlamoqda 🚀`));
