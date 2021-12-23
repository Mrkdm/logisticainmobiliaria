import {Schema, model} from 'mongoose'

const ClientSchema =new Schema({
     email: {
	 type:String,
         required:true
 	},
     name: String,
     lastname:String,
     phoneNumber: String,
     

},{
    timestamps:true,
    versionKey:false
})


export default model('Client', ClientSchema)

