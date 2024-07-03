import express from 'express';
import cors from 'cors';

// import env vars
import dotenv from 'dotenv';

// import meta data
import { fileURLToPath } from 'url';
import path from 'path';
import mongoose from 'mongoose';

// import schemas
import Projects from './models/projects.mjs';
import About from './models/about.mjs';

// start our express app to retrieve data from backend
dotenv.config();
const app = express();

// set index.mjs to default path to retrieve data
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// connect to the db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

// create express app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable cors for ui to retrieve data from server
app.use(cors());

// port num
const PORT = process.env.PORT || 8080;

// middleware (contact me, etc.)
app.use(function(req, res, next) {
    console.log(req.method, req.path);
    next();
});

app.get('/', async (req, res) => {
    try {
        res.status(200).render('hello world');
    }
    catch(err) {
        res.status(500).send({ message: 'server error' })
    };
});

// middleware for handling blurb
app.get('/about', async (req, res) => {
    console.log(req.method, req.path);
    try {
        // create abt me obj and extract info from db
        const abtMe = await About.find();
        res.json(abtMe);
    } catch (err) {
        console.error('Error retrieving about me', err);
        res.status(500).json({ message: 'Server error' });
    }
});

// get projects and return data
app.get('/projects', async (req, res) => {
    console.log(req.method, req.path);
    try {
        // create projects obj and extract info from db
        const projects = await Projects.find();
        res.json(projects);
    } catch(err) {
        console.error('Error retrieving projects', err);
        res.status(500).send({ message: 'server error' });
    }
});

// call listen to start server
app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});