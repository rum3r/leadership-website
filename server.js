const express = require('express')
const app = express()
const path = require('path')
var favicon = require('serve-favicon')
const PORT = 8080


app.use(express.static("public"));
app.use(favicon(path.join(__dirname, 'public', 'img', 'logo6.jpg'))); 


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})