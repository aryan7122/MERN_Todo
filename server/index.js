import express from "express";
import connectTOMongo from "./config/db.js";
import cors from 'cors'
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

app.use(cors())

app.use(express.json())

const PORT = 9000;

connectTOMongo()

app.get('/', (req, res) => {
    res.send(`<h1> server is running on PORT <a href='http://localhost:9000'> http://localhost:${PORT}</a> </br>
    <a href='http://localhost:${PORT}/about'> about server</a> </h1>`);
})
app.get('/about', (req, res) => {
    res.send(`<h1>this is local server  </br>
     <a href='http://localhost:9000'>go to home page</a> </h1> `);
})

app.use('/api/v1', todoRoutes)

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
}) 