import express from "express";
import {getAllProductsCon, getProductsByIdCon, getProductsBySupplierCon, getProductsByCategoryCon, addProductCon, deleteProductCon, updateProductCon} from "../controls/storeController.js";

const router = express.Router();

router.get("/", getAllProductsCon);

router.get("/:product_id", getProductsByIdCon);

router.get("/supplier/:supplier", getProductsBySupplierCon);

router.get("/categories/:category", getProductsByCategoryCon);

router.post("/", addProductCon);

router.delete("/:product_id", deleteProductCon);

router.patch("/:product_id", updateProductCon);

export default router;