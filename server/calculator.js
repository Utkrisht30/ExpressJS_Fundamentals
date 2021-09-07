const express = require('express')
const app = express()
const port = 5000

//using the bodyParser to parse the form data
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

var path = require('path')


//creating path variables
const pathOfIndex = path.join(__dirname,"../",'/client','pages','calculator.html')
const pathOfLandingPage = path.join(__dirname,"../",'/client','pages','landingPage.html')
const pathOfBmi = path.join(__dirname,"../",'client','pages','bmiCalculator.html')
//get request for the landing page
app.get("/", (req,res) => {
    res.sendFile(pathOfLandingPage)
})

//get request for the calculator page
app.get("/calculator", (req,res) => {
    res.sendFile(pathOfIndex)
})

//get request for the BMI page
app.get("/bmi", (req,res) =>{
    res.sendFile(pathOfBmi)
})

//get request fo the calculator answer oage
app.get('/answer', (req, res) => {
  res.send('Hello World!')
  
})
 
//get request for the BMI answer page

app.post("/calculatorAnswer", (req,res) => {
    var actionOfCalculator = Number(req.body.num1) + Number(req.body.num2)
    res.send("the answer is " + actionOfCalculator)
})

app.post("/bmiAnswer", (req,res) => {
  var bmi = Number(req.body.weight)/(Number(req.body.height)**2)
  res.send("your BMI is " + bmi)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })