//Variáveis
let nome = '';
let amigos = [];

//Funções
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    
    if (nome == '') {
        alert('Escreva um nome!!');
        return
    }
    
    if (amigos.includes(nome)) {
        alert ('Esse nome já foi incluso');
    } else {
        amigos.push(nome); 
        console.log(amigos);
    
    
        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = ''; 

 
        amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });


        document.getElementById('amigo').value = '';
}
    }

    //alert(amigos);
    


function sortearAmigo() {
    let numeroEscolhido = Math.floor(Math.random() * amigos.length);
    console.log(numeroEscolhido);
    if (amigos.length === 0) {
        alert('Ainda não há amigos para sortear!');
    } else {
        let amigoEscolhido = amigos[numeroEscolhido];
        //alert('O amigo sorteado é: ' + amigoEscolhido);
        document.getElementById("resultado").innerHTML = `🎉 O amigo secreto é: <strong>${amigoEscolhido}</strong>`;
        amigos.splice(numeroEscolhido, 1);
        console.log(amigos);
        let listaAmigos = document.getElementById('listaAmigos').innerHTML = amigos;
    }
    
}
