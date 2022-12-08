import Facility from "../../modules/Facility.js"


export const getAllFacilities = async (req,res,next)=>{
    try{
        const allFacilities = await Facility.find();
        res.status(200).json(allFacilities);
    }catch(err){
        next(err);
    }
}

export const getFacilityById = async (req,res,next)=>{

    const facilityId = req.params.id;
    try{
        const findFacilityById = await Facility.findById(facilityId);
        res.status(200).json(findFacilityById);
    }catch(err){
        next(err);
    }
}
export const createFacility = async (req,res,next)=>{
        try{
            const newFacility = new Facility(req.body);
            const saveFacility = await newFacility.save();
            res.status(201).json(saveFacility);
        }catch(err){
            next(err);
        }
}