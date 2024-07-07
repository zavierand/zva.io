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
import Messages from './models/messagesSchema.mjs'

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

// connect to the db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

// middleware (contact me, etc.)
app.use(function(req, res, next) {
    console.log(req.method, req.path);
    next();
});

// get and post to same route
app.route('/messages')
    .post(async (req, res) => {
        console.log(req.body, req.method);
        const message = new Messages({
            fName: `${req.body.firstName}`,
            lName: `${req.body.lastName}`,
            email: `${req.body.email}`,
            subject: `${req.body.subject}`,
            message: `${req.body.message}`
        });

        console.log(message);
        try{
            message.save();
        } catch(err) {
            console.error('Could not post', err);
        }
    })
    .get(async (req, res) => {
        try {
            const contact = await Messages.find();
            res.json(contact);
        } catch(err) {
            console.error('Could not retrieve messages', err);
        };
    });

// middleware for handling blurb
app.get('/about', async (req, res) => {
    console.log(req.method, req.path);
    try {
        // create abt me obj and extract info from db
        const abtMe = await About.find();
        console.log('About Me Section:', abtMe);
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
        console.log('Retrieved Projects: ', projects);
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