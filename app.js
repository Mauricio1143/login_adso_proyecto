const express = require(express);
const dbconnect = require("./config");
const ModeUser = require("./model");
const app = express();

const router = express.Router();

//metodo de crear registros
router.post('/', async (req, res)=>{

    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)

})

//metodo para consultar registros
router.get('/', async (req, res)=>{
    const respuesta=await ModeUser.find({})
    res.send(respuesta)
})

//metodo para consultar registros por ID
router.get('/:id', async (req, res)=>{
    const id=require.params.id;
    const respuesta= await  ModeUser.findById({_id:id})
    res.send(respuesta)
})

//metodo para eliminar
router.get('/:id', async (req, res)=>{
    const id=require.params.id;
    const respuesta= await  
    ModelUser.deleteOne({_id:id})
    res.send(respuesta)
})


app.use(express.json());
app.use(router);
 //codigo para indicar el puerto de comunicacion con la API
 app.listen(3005, ()=>{
    console.log("Servidor iniciado en el puerto 3005");
 });
 dbconnect();