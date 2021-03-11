window.onload = function() {

    let btn_voltar = document.getElementById("btn-voltar");
    btn_voltar.onclick = function() {
        window.location.href = "index.html";
    }

    let btn_novo_grupo = document.getElementById("option-novo-grupo");
    btn_novo_grupo.onclick = function() {
        let nome = prompt("Informe o nome do grupo");
        if (nome != null)
            alert(`O grupo '${nome}' será criado em breve.`);
    }

    let btn_novo_contato = document.getElementById("option-novo-contato");
    btn_novo_contato.onclick = function() {
        let nome = prompt("Informe o nome do novo contato");
        if (nome != null)
            alert(`O contato '${nome}' será salvo em breve.`);
    }
}