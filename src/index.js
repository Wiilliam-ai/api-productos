import express from "express"
import {config} from "dotenv"
import { getEnlatado, getLacteo, listarEnlatados, listarLacteos, listarProductos } from "./controllers.js"
config()
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({
        message: "Welcome to api ucv - app movil",
    })
})

app.get("/api/productos",listarProductos)
app.get("/api/productos/enlatados",listarEnlatados)
app.get("/api/productos/enlatados/:codigo",getEnlatado)
app.get("/api/productos/lacteos",listarLacteos)
app.get("/api/productos/lacteos/:codigo",getLacteo)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Listen on port ${PORT}`)
})