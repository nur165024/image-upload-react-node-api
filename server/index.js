const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const webp=require('webp-converter');
const MongoClient = require('mongodb').MongoClient;
const port = 4000

// mongo db connetion data
const uri = "mongodb+srv://doctors-portal:doctors-portal-2021@cluster0.vihvh.mongodb.net/doctors-portal?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('doctors'))
app.use(fileUpload())
webp.grant_permission();


client.connect(err => {
  const doctorsCollection = client.db("doctors-portal").collection("doctors");
  
  app.post('/image-upload-server',(req,res) => {
    const file = req.files.file;
    const email = req.body.email;
    console.log(email,file);
    const dataTime = new Date();

    file.mv(`${__dirname}/doctors/${dataTime.getDate() +'-'+ dataTime.getMinutes() +'-'+ dataTime.getSeconds() +'-'+file.name}`,err => {
      if(err){
        console.log(err);
        return res.status(500).res.send({mag : 'Failed to upload Image'})
      }
      return res.send({name: file.name, path: `/${file.name}`})
    })
  })
});


app.get('/', (req, res) => {
  res.send('Hello World! This is server page')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})