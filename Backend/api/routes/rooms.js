import express from "express";
import {getAllRooms,getRoomById,createRoom,editRoom,deleteRoom,countRoomByType} from "../controllers/roomController.js"

const router = express.Router();

//Get && Get by id -- rooms
router.get('/',getAllRooms)
router.get('/:id',getRoomById)
router.get('/find/countbytype',countRoomByType)
//Post - create room
router.post('/:buildingId',createRoom)
//edit A room:
router.put('/:id',editRoom)
//delete a room
router.delete("/:id",deleteRoom)
export default router;