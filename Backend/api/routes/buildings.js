import express from "express";
import {getAllBuildings,getBuildingById,createBuilding,editBuilding,deleteBuildingById} from "../controllers/buildingController.js"
const router = express.Router();

//Get routers:
router.get('/',getAllBuildings);
router.get('/find/:id',getBuildingById);
//Post routers:
router.post('/:facilityid',createBuilding);
//Put routers:
router.put('/:id',editBuilding)
//Delete routers
router.delete('/:id',deleteBuildingById)

export default router
