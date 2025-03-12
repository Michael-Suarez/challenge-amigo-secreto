let amigos = [];

function añadir_amigos()
{
    let entrada = document.querySelector("input")
    let nombre = entrada.value;
    if(nombre == "")
    {
        alert("Por favor, inserte un nombre");
    }
    else
    {
        amigos.push(nombre);
        entrada.value = "";
    }
};