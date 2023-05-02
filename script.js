const cards= document.querySelectorAll(".card")

// console.log(cards[3])
 cards.forEach(card=>{
    // console.log(card) revisar que el for each este funcionando
card.addEventListener("click", ()=>{
    // console.log("si funciona cada click") revisar si esta funcionando mis clicks
    // en cada click activar la clase active
    removeClassActive();
    card.classList.add("active")
}) 
}

 )

 function removeClassActive (){
    cards.forEach(card =>{
        card.classList.remove("active")
    }

    )
 }
//  cards.addEventListener('click', () => {
//         alert("it woraaaaaaaks")
//     })