import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const ProjectSchema = new mongoose.Schema({
    name: String,
    languages: {
        type: [String], 
        required: true
    },
    tech: {
        type: [String],
        required: true
    },
    link: String
});

const Projects = mongoose.model('Projects', ProjectSchema);

mongoose.connect(process.env.MONGO_URI, {})
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

export default Projects;

/* test commands
db.Projects.insertOne({
    "name": "Game Sale Discord Bot",
    "languages": {[
        "JavaScript"
    ]},
    "tech": {[
        "NodeJs",
        "discord.js",
        "MongoDB"
    ]},
    "link": "https://github.com/zavierand/steam-bot"
})

*/