import mongoose from "mongoose";
const { Schema } = mongoose;
const buildingSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    pictures:{
        type:[String ]
    },
    rooms:{
        type: [String],
    }
})
export default mongoose.model("Building", buildingSchema);
