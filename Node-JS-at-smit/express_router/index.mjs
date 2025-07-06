import express from 'express'
import path from 'path';

import authRouter from './routes/authRoutes.mjs';
import postRouter from './routes/post.mjs';
import commentRouter from './routes/comment.mjs';
import feedRouter from './routes/feed.mjs';

const __dirname = path.resolve()
const app = express();
app.use(express.json())


app.use(authRouter)


app.use((res, req, next) => {
    if (token === 'valid') {
        next()
    } else {
        res.send({ Message: 'invalid tokin' })
    }
})


app.use(postRouter)
app.use(commentRouter)
app.use(feedRouter)



app.use('public', express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`example server listening on PORT ${PORT}`)
})