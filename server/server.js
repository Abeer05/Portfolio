const express = require("express");
const axios = require("axios");
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 3001;

const app = express();
app.use(
  cors({
    origin: ["https://abeer-malik.vercel.app", "http://localhost:5173"], // PORT 5173
  })
);

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
console.log("Loaded API key:", process.env.OPENWEATHERMAP_API_KEY);

app.get("/weather", async (req, res) => {
  const { city = "Toronto" } = req.query;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching weather:", error);
    res.status(500).json({ error: "Failed to get weather" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
