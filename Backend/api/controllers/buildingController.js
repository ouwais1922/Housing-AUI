import Building from "../../modules/Building.js"
import Facility from "../../modules/Facility.js"

export const getAllBuildings = async (req,res,next)=>{
    try{
        const allBuildings = await Building.find();
        res.status(200).json(allBuildings);
    }catch(err){
        next(err);
    }
}

export const getBuildingById = async (req,res,next)=>{

    const buildingId = req.params.id;
    try{
        const findBuildingById = await Building.findById(buildingId);
        res.status(200).json(findBuildingById);
    }catch(err){
        next(err);
    }
}
export const createBuilding = async (req,res,next)=>{

        const facilityId = req.params.facilityid;
        try{
            const newBuilding = new Building(req.body);
            const saveBuilding = await newBuilding.save();
            await Facility.findByIdAndUpdate(facilityId,{$push:{buildings:saveBuilding._id}})
            res.status(201).json(saveBuilding);
        }catch(err){
            next(err);
        }
}
export const editBuilding = async (req,res,next)=>{
    const buildingId = req.params.id
    try{

        const newUpdatedBuilding = await Building.findByIdAndUpdate(buildingId,
            {
                $set:req.body
            }
            ,{new:true}
            )
            res.status(200).json(newUpdatedBuilding)
    }catch(err){
        next(err);
    }
}
export const deleteBuildingById = async (req,res,next)=>{
    const buildingId = req.params.id;
    try{
        const deleteBuildingById = await Building.findByIdAndDelete(buildingId);
        res.status(200).json("Building has been deleted successfully!")
    }catch(err){
        next(err);
    }
}