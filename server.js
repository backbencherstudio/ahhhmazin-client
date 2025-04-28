const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;
const countFilePath = path.join(__dirname, "count.txt");

// Ensure count.txt exists with initial value
if (!fs.existsSync(countFilePath)) {
    fs.writeFileSync(countFilePath, "0");
}

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/get-count", (req, res) => {
    fs.readFile(countFilePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading count:", err);
            return res.status(500).send("Error reading count");
        }
        res.send(data.trim());
    });
});

app.post("/increment", (req, res) => {
    fs.readFile(countFilePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading count:", err);
            return res.status(500).send("Error reading count");
        }

        let count = parseInt(data.trim()) || 0;  // Use 0 if parsing fails
        count++;
        fs.writeFile(countFilePath, count.toString(), (err) => {
            if (err) {
                console.error("Error writing count:", err);
                return res.status(500).send("Error writing count");
            }
            res.send(count.toString());
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
