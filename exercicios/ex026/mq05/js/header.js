
fetch("../../componentes/header.html")
    .then(resposta => resposta.text())
    .then(dados => {
        document.querySelector("body").insertAdjacentHTML("afterbegin", dados);
    })
    .catch(erro => {
        console.log("ERRO AO CARREGAR HEADER:", erro);
    });