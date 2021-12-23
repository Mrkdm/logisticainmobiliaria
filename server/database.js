import mongoose from 'mongoose'

(async()=>{
 const db = await  mongoose.connect('mongodb://localhost/inmobiliaria', {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
console.log('connect to:', db.connection.name)
}) ();



