import mongoose from 'mongoose';

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

// db name in process.env.MONGO_URI
const Projects = mongoose.model('Projects', ProjectSchema, 'projects');

export default Projects;

/* test commands

db.projects.insertOne({
    "name": "Game Sale Discord Bot",
    "languages": [
        "JavaScript"
    ],
    "tech": [
        "NodeJs",
        "discord.js",
        "MongoDB"
    ],
    "link": "https://github.com/zavierand/steam-bot"
})

*/