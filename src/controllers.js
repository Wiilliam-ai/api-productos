import { productos } from "./data.js";


const listarProductos = (req,res) =>{
    try {
        
        res.json(productos)
    } catch (error) {
        res.json({
            message:"failed"
        })
    }
}

const listarEnlatados = (req,res) =>{
    try {
        const lista = productos.filter(producto => producto.tipo === "enlatados")
        const listaFinal = lista.map(x => {
            return {
                codigo: x.codigo,
                nombre: x.nombre,
                precio: x.precio,
                cantiad: x.cantidad
            }
        })
        res.json(listaFinal)
    } catch (error) {
        res.json({
            message:"failed"
        })
    }
}

const listarLacteos = (req,res) =>{
    try {
        const lista = productos.filter(producto => producto.tipo === "lacteos")
        const listaFinal = lista.map(x => {
            return {
                codigo: x.codigo,
                nombre: x.nombre,
                precio: x.precio,
                cantiad: x.cantidad
            }
        })
        res.json(listaFinal)
    } catch (error) {
        res.json({
            message:"failed"
        })
    }
}

const getEnlatado = (req,res) =>{
    const {codigo} = req.params
    try {
        const lista = productos.filter(producto => producto.codigo === codigo.toUpperCase())
        const producto = {
            nombre: lista[0].nombre,
            precio: lista[0].precio,
            cantidad: lista[0].cantidad
        }
        res.json(producto)
    } catch (error) {
        res.json({
            message:"failed"
        })
    }
}

const getLacteo = (req,res) =>{
    const {codigo} = req.params
    try {
        const lista = productos.filter(producto => producto.codigo === codigo.toUpperCase())
        const producto = {
            nombre: lista[0].nombre,
            precio: lista[0].precio,
            cantidad: lista[0].cantidad
        }
        res.json(producto)
    } catch (error) {
        res.json({
            message:"failed"
        })
    }
}

export {
    listarProductos,
    listarEnlatados,
    listarLacteos,
    getLacteo,
    getEnlatado
}