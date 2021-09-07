const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log(req)
})

app.get('/about', (req, res) => {
  res.send('<h1>my name is utkrisht</h1>')
  // console.log(req)
})

app.get('/server', (req, res) => {
  res.send('<h1>my name is server check</h1>')
  // console.log(req)
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})