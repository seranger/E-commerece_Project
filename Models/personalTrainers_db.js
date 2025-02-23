import {pool} from "../config/config.js";

const getAllPersonalTrainers = async () => {
    let [data] = await pool.query("SELECT * FROM personal_trainers");
    return data
}


const getPersonalTrainerById = async (trainer_id) => {
    let [data] = await pool.query("SELECT * FROM personal_trainers WHERE trainer_id = ?", [trainer_id]);
    return data
}


const getPersonalTrainersBySpecialization = async (specialization) => {
    let [data] = await pool.query("SELECT * FROM personal_trainers WHERE specialization = ?", [specialization]);
    return data
}


const getPersonalTrainersByExperience = async (experience) => {
    let [data] = await pool.query("SELECT * FROM personal_trainers WHERE experience = ?", [experience]);
    return data
}


const addPersonalTrainer = async (trainer_id,name,specialization,experience) => {
    let [data] = await pool.query("INSERT INTO personal_trainers (trainer_id,name,specialization,experience) VALUES (?,?,?,?)", [trainer_id,name,specialization,experience]);
}


const deletePersonalTrainer = async (trainer_id) => {
    let [data] = await pool.query("DELETE FROM personal_trainers WHERE trainer_id = ?", [trainer_id]);
}


const updatePersonalTrainer = async (trainer_id,name,specialization,experience) => {
    let [data] = await pool.query("UPDATE personal_trainers SET name = ?, specialization = ?, experience = ? WHERE trainer_id = ?", [name,specialization,experience, trainer_id]);
}

export {getAllPersonalTrainers,getPersonalTrainerById,getPersonalTrainersBySpecialization,getPersonalTrainersByExperience,addPersonalTrainer,deletePersonalTrainer,updatePersonalTrainer}

