import express from "express";
import articleControl from "../control/articleControl";

const apiRouter = express.Router()

apiRouter.get('/pusharticlenum', articleControl.pushArticleNum)

export default apiRouter