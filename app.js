const express = require("express")
const { get } = require("http")
const app = express()
const path = require("path")
const PORT = process.env.PORT || 3030

app.use(express.static("public"))
app.listen(PORT, function(){console.log(`Mercado Liebre corriendo el puerto ${PORT}`)})

app.get("/", function(requ,res){
    res.sendfile(path.join(__dirname,"views","home.html"))
})

