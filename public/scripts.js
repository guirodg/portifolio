const modalOver = document.querySelector('.modal-over') //seleciona minha class
const cards = document.querySelectorAll('.card') // seleciona todas as class com nomes iguais

for (let card of cards ){  //para todos os cards 
    card.addEventListener("click", function(){ // ouvir click, executa funcao
        const videoId = card.getAttribute("id")
        window.location.href = `/video?id=${videoId}`
        
        
        /*modalOver.classList.add('ativo') // add class
        modalOver.querySelector ("iframe").src = `https://www.youtube.com/embed/${VideoId}`
        */
    })
}

/*document.querySelector(".close").addEventListener("click", function(){
    modalOver.classList.remove("ativo")
    modalOver.querySelector ("iframe").src =""
})
*/