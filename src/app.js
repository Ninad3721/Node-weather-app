const express = require('express') 
const path = require('path')
const app = express()
const hbs = require('hbs')
const forecast = require('./utils_weather/forecast')
const pathDirectoryfile= path.join(__dirname , '../public') 
const temppath = path.join(__dirname, '../template/views') 
const partialpath = path.join(__dirname,'../template/partials')

app.set('view engine', 'hbs')
app.set('views', temppath) 
hbs.registerPartials(partialpath)
app.use(express.static(pathDirectoryfile))



app.get('', (req,res)=>
{ res.render('index',
{
   title:"Weather",
})
})
 app.get('/weather',(req, res)=>
 {
   

   if(!req.query.name )
   {
         return res.send({
            error: "No city found"
         })
   }
   else{
      
const url ='http://api.weatherstack.com/current?access_key=7c0f5d6b87d560665b2e9e2c3948e4b6&query='+ req.query.name
 forecast(url, (error,data)=>
 {
   if(error)
   {
      res.send({error})
   }
   res.send({
      forecast: data,
      city: req.query.name,

   })
 })

 
   }

 } )
 app.get('/about',(req,res) =>
 {
    res.render('about' ,
    {
       title:"Weather",
    }) 

 })

 app.get('/help',(req,res)=>
 {
   
    res.render('help',
    {
       title:"Weather",
    }) //this is a call to server to send the response which says this is statment
 })

 app.get('/product', (req,res)=>
 {
      if(!req.query.name)
      {
         return res.send("Error no value for name provided")
      }
   res.send({
   product:[]
 })
 })
  app.get('*',(req,res)=>
  {
   res.render('404')
  })
 
 app.listen(3000, ()=>
 {
    console.log("Up anddd runnig!")
 })
