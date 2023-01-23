
import mongoose from "mongoose";


const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    test: {
        type: String,
        default: "blubb",
    },
});

const photo = mongoose.model("photo", schema); 


export const getAll = async () => {
    const photos = await photo.find();
    return photos;
}


export const create = async (title, description, test) => {
  
    const newReport = new photo({ title, description, test });

  
    const result = await newReport.save();
    return result;
}
