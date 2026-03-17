require('dotenv').config();
const express = require('express');
const path = require('path');
const contactHandler = require('./api/contact');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API route — mirrors Vercel's /api/contact
app.all('/api/contact', contactHandler);

// Serve static files from root
app.use(express.static(path.join(__dirname)));

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Local dev server running at http://localhost:${PORT}`);
});
