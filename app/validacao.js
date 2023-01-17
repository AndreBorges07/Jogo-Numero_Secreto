function verificaChuteValido(chute){
    const numero = +chute; //somando ele também tenta passar para int direto

    if (chuteInvalido(numero)){
                
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h1>Game Over!!!</h1>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                <h4>Ou diga <strong>"jogar novamente"</strong></h4>
                `
                document.body.style.color = '#FF0000';
        } 

        if (chute.toUpperCase() === "JOGAR NOVAMENTE" || chute.toUpperCase() === "ATUALIZAR") {

            window.location.reload()
        } 
        
        //---------Respostas para pessoas sem vocabulário------

        if (chute.toUpperCase() === "P****") { 

            document.body.innerHTML =
                `
                <h1>P*** é o C# da cachorra</h1>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                <h4>Ou diga <strong>"jogar novamente"</strong></h4>
                `
                document.body.style.color = "red";
        } 
        
        if (chute.toUpperCase() === "C******") {

            document.body.innerHTML =
                `
                <h1>Você disse "baralho", certo?</h1>
                <h2>Sem palavrão!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                <h4>Ou diga <strong>"jogar novamente"</strong></h4>
                `
                document.body.style.color = "red";
        }
        
        else {

            elementoChute.innerHTML += '<div>Valor inválido</div>';
        }
        
    }

    

    if (numeroPermitido(numero)){
        elementoChute.innerHTML += `
           <div> Valor inválido! Fale um número entre
           ${menorValor} e ${maiorValor}</div>` ;
           return
    }

    //------ QUANDO GANHAR ------ 
    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h1>Você acertou!</h1>
            <h3>O Número secreto era <strong> ${numeroSecreto}</strong></h3>
            <button id= "jogar-novamente" class="btn-jogar">Jogar novamente!</button>
            <h4>Ou diga <strong>"jogar novamente"</strong></h4>
        
        `;//É para redesenhar a tela
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `;

    }


}


function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroPermitido(numero){
    return numero > maiorValor || numero < menorValor
}


//ação de click para atualizar a tela
document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})
