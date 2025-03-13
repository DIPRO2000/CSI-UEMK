import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ExcelJS from "exceljs";
import fs from "fs";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const FILE_PATH = "contact_data.xlsx";

// Function to save form data to Excel
const saveToExcel = async (data) => {
    let workbook;
    if (fs.existsSync(FILE_PATH)) {
        workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(FILE_PATH);
    } else {
        workbook = new ExcelJS.Workbook();
    }

    let worksheet = workbook.getWorksheet("Contacts");
    if (!worksheet) {
        worksheet = workbook.addWorksheet("Contacts");
        worksheet.addRow(["Name", "Email", "Message", "Date"]); // Add headers
    }

    worksheet.addRow([data.name, data.email, data.message, new Date().toLocaleString()]);
    await workbook.xlsx.writeFile(FILE_PATH);
};

// ✅ **New GET Route for Root URL**
app.get("/", (req, res) => {
    res.send("Welcome to the Contact Form API. Use POST /submit to send data.");
});

// API Route to receive form data and save to Excel
app.post("/submit", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    await saveToExcel({ name, email, message });
    res.status(200).json({ message: "Form submitted successfully" });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
