import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send(`Hello world! ${new Date()}`)
})

app.get('/login', (req, res) => {
    res.send('Hi Login your account!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}...!`)
})