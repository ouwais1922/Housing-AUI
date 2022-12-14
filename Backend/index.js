import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser";
import cors from "cors";
import facilityRouter from "./api/routes/facilities.js"
import buildingRouter from "./api/routes/buildings.js"
import roomRouter from "./api/routes/rooms.js"
import authRoute from "./api/routes/auth.js"
import userRouter from "./api/routes/users.js"
const app = express();
// dotenv allows to read variables from the ".env" file
dotenv.config();

//mongoose configuration:
const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connect to mongodb!!");  
    }catch(error){
        console.log(error);
    }
}
// in case someting is going wrong in MONGODB
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB diconnected");
  });
  // in case somthing is going wrong in MONGODB and we get to rcover the problem
mongoose.connection.on("connected", () => {
    console.log("mongoDB is connected");
  });



//Routes and some configurations:
app.use(cors()); // simple Usage (Enable All CORS Requests) or Enable CORS for a Single Route
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRouter);
app.use('/api/facilities',facilityRouter)
app.use('/api/buildings',buildingRouter)
app.use('/api/rooms',roomRouter)




// next middleware:
app.use((err,req,res,next)=>{
        const errStatus = err.status || 500;
        const errMessage = err.message || "Something is going wrong!!";
        return res.status(errStatus).json({
            success : false,
            status: errStatus,
            message: errMessage,
            stack: err.stack
        })
})


app.listen(process.env.PORT,()=>{
    connect(); 
    console.log("The server is connected to port: 5000 ....");
})