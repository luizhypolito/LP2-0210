const pc = {
    marca: "Samsung",
    processador: "Intel i3",
    memoria: "8GB",
    HD: "1 TB"

}

function criarNO() {

    const elementoMarca = document.createElement("h1")
    elementoMarca.innerText = `${pc.marca}`

    const elementoProc = document.createElement("h2")
    elementoProc.innerText = `${pc.processador}`

    const elementoMem = document.createElement("h2")
    elementoMem.innerText = `${pc.memoria}`

    const elementoHD = document.createElement("p")
    elementoHD.innerText = `${pc.HD}`

    const divPC = document.createElement("div")
    divPC.classList.add("produto")
    divPC.appendChild(pc.marca)
    divPC.appendChild(pc.processador)
    divPC.appendChild(pc.memoria)
    divPC.appendChild(pc.HD)

    document.body.appendChild(divPC)
    
}

criarNO()


