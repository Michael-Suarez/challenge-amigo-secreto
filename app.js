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

function sortear_amigos()
{
    let lista = document.querySelector("ul");
    let mensaje = document.createElement("p");
    if(amigos.length === 0)
    {
        alert("Por favor, inserte un nombre");
    }
    else
    {
        let elegido =Math.floor(Math.random() * amigos.length);
        mensaje.textContent = `Tu amigo secreto es ${amigos[elegido]}`;
        lista.replaceWith(mensaje);
    };
};