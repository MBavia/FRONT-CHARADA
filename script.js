const baseUrl = "http://127.0.0.1:5000/";
const aleatorio = "/charadas";

let respostaCharada = '';

async function getCharada() {
    try {
        const charada = await fetch(baseUrl + aleatorio)
        console.log(charada);

        const charadaJson = await charada.json();
        console.log(charadaJson.pergunta);

        document.getElementById('charada-pergunta').innerText = charadaJson.pergunta

        respostaCharada = charadaJson
        console.log(respostaCharada)

    } catch (error) {
        console.log("Erro ao chamar a api: " + error)
    }
}

getCharada()

function verResposta() {
    let respostaUsuario = document.getElementById('input-resposta').value;
    if (respostaUsuario == respostaCharada) {
        alert("Acertou!")
    } else {
        alert("Errado!")
    }
}

function verResposta() {
    let respostaUsuario = document.getElementById('input-resposta').value;
    let respostaElement = document.getElementById('resposta-text');
    let respostaSpan = document.getElementById('resposta');

    if (respostaUsuario.toLowerCase() === respostaCharada.resposta.toLowerCase()) {
        respostaSpan.innerText = "Acertou! 🎉";
        respostaSpan.style.color = "green";
    } else {
        respostaSpan.innerText = `Errado! A resposta correta é: ${respostaCharada.resposta}`;
        respostaSpan.style.color = "red";
    }

    respostaElement.classList.remove("hidden");
}

function novaCharada() {
    getCharada();
}

