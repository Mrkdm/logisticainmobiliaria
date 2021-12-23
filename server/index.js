import express from 'express'

import cors from 'cors'

import indexRoutes from './routes/index.routes'
import imagesRoutes from './routes/images.routes'
import messagesRoutes from './routes/messages.routes'
import clientQuestionRoutes from './routes/clientQuestion.routes'
import './database'

const app = express();



app.use(cors())
app.use(express.json())
app.use(indexRoutes)
app.use(imagesRoutes)   
app.use(messagesRoutes)
app.use(clientQuestionRoutes)

app.set('port', process.env.PORT || 8080);
console.log('success')


app.listen(app.get('port'))
