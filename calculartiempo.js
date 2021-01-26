//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.



let agregar=document.querySelector("#agregar")
agregar.onclick=
function()
{
    
    //let input = document.createElement("input")
    //input.type="number"
    let div=document.createElement("div")
    div.innerHTML = '<input type="number" class="horas"><input type="number" class="minutos"><input type="number" class="segundos">'
    document.querySelector("#form").append(div)
    

    

}


let boton = document.querySelector("#calcularTotal")
boton.onclick = function () {
    let totalHoras=0;
    let totalMinutos=0;
    let totalSegundos=0;

    const horas = document.querySelectorAll(".horas")
    const minutos = document.querySelectorAll(".minutos")
    const segundos = document.querySelectorAll(".segundos")

    horas.forEach(
        e => {
            console.log(totalHoras)
            totalHoras += Number(e.value)
            console.log(e.value)
            
        }
    );
    console.log(Number(totalHoras))
    minutos.forEach(
        e => {
            totalMinutos += Number(e.value)
        }
    );
    segundos.forEach(
        e=> {
            totalSegundos += Number(e.value)
        }
    );
    
    if(totalSegundos>59)
    {
        totalMinutos+=Math.trunc(totalSegundos/60)
    }
    if(totalMinutos>59)
    {
        totalHoras+=Math.trunc(totalMinutos/60)
    }
    totalSegundos = totalSegundos % 60
    totalMinutos = totalMinutos % 60
    document.querySelector("#total").innerHTML = "Tiempo total: "+totalHoras+" : "+totalMinutos+" : "+totalSegundos
    debugger;    

}








