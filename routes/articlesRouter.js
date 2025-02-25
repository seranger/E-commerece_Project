import express from "express";
import {getAllArticlesCon, getArticleByIdCon, addArticleCon, deleteArticleCon, updateArticleCon, getAllArticlesOrderByDateCon, getAllArticlesOrderByAuthorCon} from "../controls/articlesController.js";

const router = express.Router();

router.get("/", getAllArticlesCon);

router.get("/date", getAllArticlesOrderByDateCon);

router.get("/author", getAllArticlesOrderByAuthorCon);

router.get("/:article_id", getArticleByIdCon);

router.post("/", addArticleCon);

router.delete("/:article_id", deleteArticleCon);

router.patch("/:article_id", updateArticleCon);

export default router;