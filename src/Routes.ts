import { Router } from "express";
import CarController from "./controllers/Carcontroller";


const router = Router()

router.get("/cars", CarController.index);
router.get("/car/:id", CarController.findById);
router.post("/car", CarController.create);
router.put("/car/:id", CarController.update);
router.delete("/car/:id", CarController.delete);



export default router
