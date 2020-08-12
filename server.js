const express = require ('express')
const nunjucks = require ('nunjucks')

const server = express ()
const videos = require ("./data") // busca meu obj do aqv data

server.use(express.static('public')) // buscando meus arquivos da pasta public

server.set("view engine", "njk") // configurando nunjucks engine para mudar meu index html

nunjucks.configure("views", {
    express: server,
    autoescape: false, // Permite ler meus links html
    noCache: true
})

server.get("/", function(req, res) { //servidor respondendo requisicao rotaa
    const data = {
        avatar_url: "https://avatars1.githubusercontent.com/u/59857804?s=460&u=881a652dd07760bf17abe5882e7014a17da74670&v=4",
        name: "Guilherme Rodrigues",
        role: "Desenvolvidor - Back-end",
        description: 'Programador full-stack, inovação e paixão <a href="https://github.com/guizinhord" target="_blank">Github',
        links:[
            {name: "Instagram", url: "https://www.instagram.com/guizinhord/?hl=pt-br"},
            {name: "Twitter", url: "https://twitter.com/guizinhord"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/guilherme-rodrigues-b4428817b/"}
        ]

    }



    return res.render("about", {data})
})

server.get("/trabalhos", function(req, res) { //servidor respondendo requisicao
    return res.render("trabalhos", {items: videos}) // passando parametro para buscar meu obj data.js
})

server.get("/video", function (req, res){
    const id = req.query.id
   
   const video = videos.find(function(video){
       if (video.id == id){
           return true
       }
   })

   if (!video) {
       return res.send ("Video not found!")
   }
   
    return res.render("video", { item: video})
})

    server.listen(5000, function (){
    console.log ("Server is running")
})