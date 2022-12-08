import mongoose from "mongoose";
const { Schema } = mongoose;
const facilitySchema = new Schema({
    name : {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    distance:{
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
    raiting: {
        type: Number,
        min: 0,
        max: 5,
      },
    buildings:{
        type: [String],
    }
})
export default mongoose.model("Facility", facilitySchema);
