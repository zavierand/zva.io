import mongoose from 'mongoose';

const AboutSchema = new mongoose.Schema({
    blurb: { 
        type: String, 
        required: true
    }
});

const About = mongoose.model('About', AboutSchema, 'about');

export default About;