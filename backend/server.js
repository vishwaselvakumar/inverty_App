const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const ASTRO_API_URL = "https://json.astrologyapi.com/v1/astro_details";
const USER_ID = process.env.USER_ID;
const API_KEY = process.env.API_KEY;

// Route to handle astrology API request
app.post('/api/astro_details', async (req, res) => {
    const { day, month, year, hour, min, lat, lon, tzone } = req.body;

    try {
        const response = await axios.post(ASTRO_API_URL, {
            day, month, year, hour, min, lat, lon, tzone
        }, {
            auth: {
                username: USER_ID,
                password: API_KEY
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching astrology data' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
