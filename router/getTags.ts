//获取所有的标签

import express from "express";
import tagsControl from "../control/tagsControl";
const apiRouter = express.Router()

apiRouter.get('/gettags', tagsControl.getAllTags)

export default apiRouter