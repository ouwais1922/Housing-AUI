import express from "express";
import {getAllUsers,getUsersById,editUserById,deleteUserById} from "../controllers/userController.js"
import { verifyToken,verifyUser,verifyAdmin } from "../../utils/verifyToken.js";
const router = express.Router();


// router.get("/checkAuth",verifyToken,(req,res)=>{
//     res.send("Bingoo!! you are authenticated...")
// })

// router.get("/checkUser/:id",verifyUser,(req,res)=>{
//     res.send("Hello user you are logged in and you can delete ur account...")
// })
// router.get("/checkAdmin/:id",verifyAdmin,(req,res)=>{
//     res.send("Hello admin you are logged in and you can delete all account...")
// })


// CRUD operation:
router.get("/",verifyAdmin,getAllUsers)
router.get("/:id",verifyUser,getUsersById)
router.put('/:id',verifyUser,editUserById)
router.delete("/:id",verifyUser,deleteUserById)





export default router
