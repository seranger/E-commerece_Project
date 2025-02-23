import express from "express";
import {getAllPersonalTrainersCon,getPersonalTrainerByIdCon,getPersonalTrainersBySpecializationCon,getPersonalTrainersByExperienceCon,addPersonalTrainerCon,deletePersonalTrainerCon,updatePersonalTrainerCon} from "../controls/personalTrainersController.js";

const router = express.Router();

router.get("/", getAllPersonalTrainersCon);

router.get("/:personal_trainer_id", getPersonalTrainerByIdCon);

router.get("/specialization/:specialization", getPersonalTrainersBySpecializationCon);

router.get("/experience/:experience", getPersonalTrainersByExperienceCon);

router.post("/", addPersonalTrainerCon);

router.delete("/:personal_trainer_id", deletePersonalTrainerCon);

router.patch("/:personal_trainer_id", updatePersonalTrainerCon);

export default router;