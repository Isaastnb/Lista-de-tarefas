var button = document.querySelector(".add-task");
var input = document.querySelector(".input-task");
var lista = []
var listaok = document.querySelector(".list-task")
function criarli(){
    lista.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ""

    mostrarli()

}
function mostrarli(){
    var newTask = ""
    lista.forEach((task, posicao) => {
    newTask += `<li class="task ${task.concluida && "done"}">
            <img src="okimagem.png" alt="imagem ok" onclick="feito(${posicao})">
            <p>${task.tarefa}</p>
            <img src="lixo.png" alt="imagem lixo" onclick="deleteItem(${posicao})">
        </li>`
    }) 
    listaok.innerHTML = newTask

    localStorage.setItem("list", JSON.stringify(lista))

    input.value = ""
}
button.addEventListener("click",  criarli);

function deleteItem(posicao){
    lista.splice(posicao,1)
    mostrarli()
}
function feito(posicao){
    lista[posicao].concluida = !lista[posicao].concluida
    mostrarli()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem("list")
    if(tarefasDoLocalStorage){
        lista = JSON.parse(tarefasDoLocalStorage)
        mostrarli()
    }
}
recarregarTarefas()