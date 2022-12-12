import Room from "../../modules/Room.js"
import Building from "../../modules/Building.js"

export const getAllRooms = async (req,res,next)=>{
        try{
            const allRooms = await Room.find();
            res.status(200).json(allRooms);
        }catch(err){
            next(err);
        }
}

export const getRoomById = async (req,res,next)=>{
    const roomId = req.params.id;
    try{
        const roomById = await Room.findById(roomId);
        res.status(200).json(roomById);
    }catch(err){
        next(err);
    }
}

export const createRoom = async (req,res,next)=>{

        const buildingId = req.params.buildingId;
        try{
            const newRoom = new Room(req.body);
            const saveRoom = await newRoom.save();
            await Building.findByIdAndUpdate(buildingId,{
                $push:{rooms:saveRoom._id}
            })
            res.status(201).json(saveRoom);
        }catch(err){
            next(err);
        }
}
export const editRoom = async (req,res,next)=>{
    const roomId = req.params.id
    try{

        const newUpdatedRoom = await Room.findByIdAndUpdate(roomId,
            {
                $set:req.body
            }
            ,{new:true}
            )
            res.status(200).json(newUpdatedRoom)
    }catch(err){
        next(err);
    }
}
export const deleteRoom = async (req,res,next)=>{

    const roomId = req.params.id;
    try{
        const deleteRoom = await Room.findByIdAndDelete(roomId);
        res.status(200).json('Room has been deleted successfully!')
    }catch(err){
        next(err);
    }

}