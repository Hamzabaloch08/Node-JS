import express from 'express'
import path from 'path';

const __dirname = path.resolve()
const app = express();
const PORT = process.env.PORT || 3000;

let comments = []

app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')))

app.post('/comment/:name', (req, res) => {
    const name = req.params.name
    const comment = req.body.comment

    comments.push({
        name: name,
        comment: comment
    })

    res.send({
        message: "comment posted successfully"
    })
})

app.get('/comments', (req, res) => {

    res.send({
        status: "success",
        data: comments
    })
})

app.listen(PORT, () => {
    console.log(`example server listening on PORT ${PORT}`)
})