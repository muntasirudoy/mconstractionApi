import express from 'express';
import cors from 'cors'
const app = express();
import AvilableFlatsCardData from './AvilableFlatsCardData.js'



app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World')
  })

app.get('/avilableflats', function (req, res) {
    res.send(AvilableFlatsCardData)
})




app.get('/avilableflats/:slug', function (req, res) {
    
    let singleflatdetails= AvilableFlatsCardData.find(items=>{
        if(req.params.slug == items.slug){
            return items
        }
    })

    console.log("back",req.params.slug)

res.send(singleflatdetails)
})










app.listen(8000,()=>{
    console.log("Connected")
});