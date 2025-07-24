import todoRoutes from './routes/todoRoutes.mjs'
import express from "express";
import path from "path";

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/api/v1',todoRoutes)

app.listen(PORT, () => {
    console.log(`example server listining on PORT ${PORT}`)
});