
import {Schema, model} from 'mongoose'

const ClientquestionSchema =new Schema({
     email: {
         type:String,
         required:true
        },
     name: String,
     message:String,
     phoneNumber: String,
     idProp: String


},{
    timestamps:true,
    versionKey:false
})


export default model('ClientQuestion', ClientquestionSchema)
