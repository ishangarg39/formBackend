import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const dbPath = './db.json';

app.get('/ping', (req, res) => {
    res.json({ success: true });
   // console.log("Ping command run")
});

app.post('/submit', (req, res) => {
    const { Name, Email, PhoneNumber, GitHubLink, TimeSpent } = req.body;
    const newSubmission = { Name, Email, PhoneNumber, GitHubLink, TimeSpent };
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    db.push(newSubmission);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    res.json({ success: true });
});

app.get('/read', (req, res) => {
    const index = parseInt(req.query.index as string, 10);

    // Read and parse the JSON file
    let db: string | any[];
    try {
        db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    } catch (error) {
        return res.status(500).json({ error: 'Failed to read database' });
    }

    // Check if the index is within bounds
    if (isNaN(index) || index < 0 || index >= db.length) {
        return res.status(404).json({ error: 'Index out of range' });
    }

    // Return the object at the specified index
    res.json(db[index]);
});

app.delete('/delete', (req, res) => {
    const index = parseInt(req.body.index, 10);
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    if (index < 0 || index >= db.length) {
        return res.status(404).json({ error: 'Index out of range' });
    }
    db.splice(index, 1);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    res.json({ success: true });
});

app.put('/edit', (req, res) => {
    const index = parseInt(req.body.index, 10);
    const { Name, Email, PhoneNumber, GitHubLink, TimeSpent } = req.body;
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    if (index < 0 || index >= db.length) {
        return res.status(404).json({ error: 'Index out of range' });
    }
    db[index] = { Name, Email, PhoneNumber, GitHubLink, TimeSpent };
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
