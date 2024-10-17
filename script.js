/*Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 
indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click fetchi altre 10 mail (sostituendo le altre)*/

let emailListEl = document.getElementById("emailList");
let buttonEl = document.getElementById("generateBtn");

buttonEl.addEventListener("click" , function(){
    for (let i = 0; i < 10; i++) {
        emailListEl.innerHTML += `<li class="col-5 d-flex justify-content-center">fpm.asd@gmail.com</li>`
        
    }
})
