import mongoose from "mongoose";
const { Schema } = mongoose;

const roomShema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    // required: true,
  },
  roomNumbers : [{number: Number,unavailableDates:{type:[Date]}}],
},{timestamps:true});
export default mongoose.model("Room", roomShema);
