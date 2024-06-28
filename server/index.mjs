import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path'
import Projects from './models/projects.mjs';

// start our express app to retrieve data from backend
dotenv.config();
const app = express();

// set index.mjs to default path to retrieve data
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// create express app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable cors for ui to retrieve data from server
app.use(cors());

// port num
const PORT = process.env.PORT;

// middleware (contact me, etc.)
app.use(function(req, res, next) {
    console.log(req.method, req.path);
    next();
});

// middleware for handling blurb
// Endpoint to retrieve about me data
app.get('/about', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'data', 'about.json');
        const aboutData = require(filePath); // Require JSON file directly
        res.json(aboutData);
        res.send(aboutData);
    } catch (err) {
        console.error('Error retrieving about me', err);
        res.status(500).json({ message: 'Server error' });
    }
});

// get projects and return data
app.get('/projects', async (req, res) => {
    try {
        const projects = await Projects.find();
        res.json(projects);
    } catch(err) {
        console.error('Error retrieving projects', err);
        res.status(500).send('Error retrieving projects');
    }
});

// call listen to start server
app.listen(() => {
    console.log('Listening on port', PORT);
});