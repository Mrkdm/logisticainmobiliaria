import { Router } from "express";
import Client from '../models/client.js'
import Image from '../models/images.js'
const router = Router();


router.post('/api/message/upload', async(req,res)=>{
        const {email} = req.body
        const {name} = req.body
        const {lastname} = req.body
        const {phoneNumber} = req.body
        try{
        const client =  new Client({
        name:name,
        lastname:lastname,
        email:email,
        phoneNumber:phoneNumber

        })
await client.save();
        res.json('Enviado correctamente')
        console.log(client)
        }
        catch(error){
        console.log(error)
        res.json(error)
        }
})


router.get('/api/message/', async (req, res)=>{
    var images = await Client.find();
    res.json(images)
})


router.get('/api/message/:id',async(req,res)=>{
const message = await Client.findById(req.params.id);
return res.json(image);

})

export default router;
