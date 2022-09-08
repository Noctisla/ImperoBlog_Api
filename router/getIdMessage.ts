import express from 'express'
import messageControl from '../control/messageControl'

const apiRouter = express.Router()
apiRouter.get('/getidmessage', messageControl.getIdMessage)

export default apiRouter