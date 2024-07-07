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

// authentication
import google from 'googleapis'

// import mailing dependency
import nodemailer from 'nodemailer';

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
const PORT = process.env.PORT;

// middleware (contact me, etc.)
app.use(function(req, res, next) {
    console.log(req.method, req.path);
    next();
});

// send emails
app.post('/send-email', (req, res) => {
    // create email obj to store data from ui
    const req_email = {
        firstName: `${req.body.firstName}`,
        lastName: `${req.body.lastName}`,
        e_address: `${req.body.e_address}`,
        subject: `${req.body.subject}`,
        text: `${req.body.message}`,
    };

    // log to test
    console.log(req_email);

    const message = {
        from: req_email.e_address,
        to: process.env.GMAIL_USERNAME,
        cc: process.env.GMAIL_CC,
        subject: req_email.subject,
        text: req_email.text,
    };

    // log message to test
    console.log(message);

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USERNAME,
                pass: process.env.GMAIL_PASSWORD,
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET
            }
        });

        transporter.sendMail(message, (err, data) => {
            if (err) {
                console.error('Error sending email', err);
            } else {
                console.log('Email successfully sent!');
            }
        });
    } catch(err) {
        console.error('Error sending email', err);
    }
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