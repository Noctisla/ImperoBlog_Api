import express from 'express'
import articleControl from '../control/articleControl'

const apiRouter = express.Router()


apiRouter.get('/delarticle', articleControl.delArticle)

export default apiRouter