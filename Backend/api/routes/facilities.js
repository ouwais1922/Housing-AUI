import express from "express";
import {createFacility,getAllFacilities,getFacilityById,deleteFacilityById,editFacility} from "../controllers/facilityController.js"
const router = express.Router();

//Get routes:
router.get('/',getAllFacilities);
router.get('/find/:id',getFacilityById);
//Post routes:
router.post('/',createFacility);
//PUT routes:
router.put('/:id',editFacility)
//Delete routes:
router.delete('/:id',deleteFacilityById);

export default router