let amigos = [];

function añadir_amigos()
{
    let entrada = document.querySelector("input");
    let nombre = entrada.value.trim();
    if(nombre == "")
    {
        alert("Por favor, inserte un nombre");
    }
    else
    {
        amigos.push(nombre);
        entrada.value = "";
        actualizar_lista_amigos(nombre);
    }
};

function actualizar_lista_amigos(nombre)
{
    let lista = document.querySelector("ul");
    let li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
};