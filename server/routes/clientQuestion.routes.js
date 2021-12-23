
import { Router } from "express"
import ClientQuestion from '../models/clientQuestion.js'
const router = Router();


router.post('/api/message/inmo', async(req,res)=>{
        const {email} = req.body
        const {name} = req.body
        const {message} = req.body
        const {phoneNumber} = req.body
	const {idProp} = req.body
        try{
        const client =  new ClientQuestion({
        name:name,
        message:message,
        email:email,
        phoneNumber:phoneNumber,
	idProp:idProp
        })
        res.json('Enviado correctamente')
        console.log(client)
        }
        catch(error){
        console.log(error)
        res.json(error)
        }
})

router.get('/api/message/inmo', async(req,res)=>{
const messages = await ClientQuestion.find();
return res.json(messages)

})
router.get('/api/message/inmo/:id',async(req,res)=>{
const message = await ClientQuestion.findById(req.params.id);
return res.json(image);

})

export default router;

