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
        if (chute.toUpperCase().includes("ANDRÉ BORGES") || chute.toUpperCase().includes("ANDREA BORGES")) { 

            document.body.innerHTML =
                `
                <h1>Disse o nome de quem me criou!</h1>
                <h3>Veja esse e mais projetos em seu GitHub: <a href="https://github.com/AndreBorges07" target="_blank">https://github.com/AndreBorges07</a></h3>
                <br><br>
                <h3> Obrigado por jogar!</h3><br>
                <h3> Com carinho 🧡, André Borges</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                <h4>Ou diga <strong>"jogar novamente"</strong></h4>
                `
                document.body.style.color = "--primary-color";
        } 
        
        //---------Respostas para pessoas sem vocabulário------

        if (chute.toUpperCase().includes("P****")) { 

            document.body.innerHTML =
                `
                <h1>P*** é o C# da cachorra</h1>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                <h4>Ou diga <strong>"jogar novamente"</strong></h4>
                `
                document.body.style.color = "red";
        } 

        if (chute.toUpperCase().includes("M****")) { 

            document.body.innerHTML =
                `
                <h1>MER** é o que você vai limpar se não parar de falar palavrão!"</h1>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                <h4>Ou diga <strong>"jogar novamente"</strong></h4>
                `
                document.body.style.color = "red";
        } 
        if (chute.toUpperCase().includes("BOSTA")) { 

            document.body.innerHTML =
                `
                <h1>"Bosta" é o que você vai comer se continuar assim!</h1>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                <h4>Ou diga <strong>"jogar novamente"</strong></h4>
                `
                document.body.style.color = "red";
        } 
        if (chute.toUpperCase().includes("V**************")) { 

            document.body.innerHTML =
                `
                <h1>Já fui, mas lá estava lotado de gente que fala palavrão. <br>
                Voltei pra te dar um sermão!</h1>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                <h4>Ou diga <strong>"jogar novamente"</strong></h4>
                `
                document.body.style.color = "red";
        } 
        if (chute.toUpperCase().includes("V***********")) { 

            document.body.innerHTML =
                `
                <h1>Você não sabe jogar e fica xingando, vou hachear seu aparelho...</h1>
                <h2>Sem palavrão!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                <h4>Ou diga <strong>"jogar novamente"</strong></h4>
                `
                document.body.style.color = "red";
        } 
        if (chute.toUpperCase().includes("ARROMBAD")) { 

            document.body.innerHTML =
                `
                <h1>Arrombado(a) é o que você vai ficar se não parar de me xingar!</h1>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                <h4>Ou diga <strong>"jogar novamente"</strong></h4>
                `
                document.body.style.color = "red";
        } 
        if (chute.toUpperCase().includes("C******")) {

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
        if (chute.toUpperCase().includes("f***")) {

            document.body.innerHTML =
                `   
                <h1>Você tá me xingando, seu sem vergonha?!</h1>
                <h2>Sem palavrão!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                <h4>Ou diga <strong>"jogar novamente"</strong></h4>
                `
                document.body.style.color = "red";
        }
        if (chute.toUpperCase().includes("F************")) {

            document.body.innerHTML =
                `   
                <h1>Você tá me xingando, seu sem vergonha?!</h1>
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
