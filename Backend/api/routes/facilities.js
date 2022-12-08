import express from "express";
import {createFacility,getAllFacilities,getFacilityById,deleteFacilityById} from "../controllers/facilityController.js"
const router = express.Router();

//Get routes:
router.get('/',getAllFacilities);
router.get('/find/:id',getFacilityById);
//Post routes:
router.post('/',createFacility);
//PUT routes:

//Delete routes:
router.delete('/:id',deleteFacilityById);

export default router