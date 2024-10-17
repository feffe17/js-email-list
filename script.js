/*Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 
indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click fetchi altre 10 mail (sostituendo le altre)*/


let emailListEl = document.getElementById("emailList");
let buttonEl = document.getElementById("generateBtn");

buttonEl.addEventListener("click" , function(){
    emailListEl.innerHTML = ""
    let emailGenerata;
    for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(resp => {
            emailGenerata = resp.data.response;    
            emailListEl.innerHTML += `<li class="col-5 d-flex justify-content-center">${emailGenerata}</li>`
        })
        .catch(error => {
            console.error('Errore durante il recupero dell\'email:', error);
        });
    }
})
