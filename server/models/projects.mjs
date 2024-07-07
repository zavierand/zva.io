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
    link: String,
    overview: String,
    img: {
        type: Buffer,
        required: true
    }
});

// db name in process.env.MONGO_URI
const Projects = mongoose.model('Projects', ProjectSchema, 'projects');

export default Projects;