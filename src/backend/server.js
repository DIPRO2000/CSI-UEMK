import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Airtable API Configuration
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = "Contacts"; // Make sure it matches your Airtable table name

// Debugging: Log API Key and Base ID (Remove this in production)
console.log("🚀 Airtable API Key:", AIRTABLE_API_KEY ? "Loaded ✅" : "Not Found ❌");
console.log("🚀 Airtable Base ID:", AIRTABLE_BASE_ID ? AIRTABLE_BASE_ID : "Not Found ❌");

// Function to Save Data to Airtable
const saveToAirtable = async (data) => {
    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;
    
    try {
        const response = await axios.post(url, {
            records: [{
                fields: {
                    Name: data.name,
                    Email: data.email,
                    Message: data.message,
                    Date: new Date().toLocaleString()
                }
            }]
        }, {
            headers: {
                Authorization: `Bearer ${AIRTABLE_API_KEY}`,
                "Content-Type": "application/json"
            }
        });

        console.log("✅ Data saved to Airtable:", response.data);
    } catch (error) {
        console.error("🚨 Airtable API Error:", error.response?.data || error.message);
        throw error;  // Re-throw error so `/submit` route can handle it
    }
};

// API Route to Receive Form Data and Save to Airtable
app.post("/submit", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        await saveToAirtable({ name, email, message });
        res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
        console.error("❌ Error saving to Airtable:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to submit form" });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
