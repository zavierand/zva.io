import fs from 'fs';
import path from 'path';

// function to read and encode an image file to Base64
function encodeImageToBase64(imagePath) {
    // read the image file
    const image = fs.readFileSync(imagePath);

    // encode the image to Base64 format
    const base64Image = Buffer.from(image).toString('base64');
    return base64Image;
}

// Calculate directory name using import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// paths to imgs
const imagePathZZENSE = path.join(__dirname, '../ui/src/assets/zzense-demo.jpg');
const imagePathDECLAT = path.join(__dirname, '../ui/src/assets/declat-demo.jpg');
const imagePathSAMMY = path.join(__dirname, '../ui/src/assets/SAMMY-demo.jpg');
const imagePathZVA = path.join(__dirname, '../ui/src/assets/zva-demo.jpg');

// encode images
const ZZENSE = encodeImageToBase64(imagePathZZENSE);


// log Base64 encodings
console.log('ZZENSE Base64:', ZZENSE);


