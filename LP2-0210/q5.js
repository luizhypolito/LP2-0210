let aluno1 = {
    nome: "Luiz",
    nota: "10",

}

let aluno2 = {
    nome: "Lucas",
    nota: "2",

}

let aluno3 = {
    nome: "Gabriel",
    nota: "7",

}

let alunos = [aluno1, aluno2, aluno3]


for (i = 0; i <= 2; i++) {

    const elementoCriado = document.createElement("h3")
    elementoCriado.innerText = `${alunos[i].nome}`
    document.body.appendChild(elementoCriado)

    const elementoNota = document.createElement("p")
    elementoNota.innerText = `${alunos[i].nota}`
    document.body.appendChild(elementoNota)



}
