document.addEventListener("DOMContentLoaded", () => {
    const inputTarefa = document.getElementById("novaTarefa");
    const botaoAdicionar = document.getElementById("adicionarTarefa");
    const listaTarefas = document.getElementById("listaTarefas");

    botaoAdicionar.addEventListener("click", () => {
        const textoTarefa = inputTarefa.value.trim();

        if (textoTarefa !== "") {
            const novaTarefa = document.createElement("li");
            novaTarefa.innerHTML = `
                ${textoTarefa}
                <button class="remover">X</button>
            `;

            listaTarefas.appendChild(novaTarefa);
            inputTarefa.value = "";

            novaTarefa.querySelector(".remover").addEventListener("click", () => {
                novaTarefa.remove();
            });
        } else {
            alert("Digite uma tarefa válida!");
        }
    });
});