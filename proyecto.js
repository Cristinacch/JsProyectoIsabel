const precio_corte = 5000;
const precio_bano = 2500;
const precio_adicional = 500;
let costo_final = 0;
let lista_reservas = [];
var verficacion = 'no';
var nombre;
do{
    if(verficacion==='yes'){
        reservar(nombre);
    }
    else{
        nombre = prompt("Ingrese su nombre");
        reservar(nombre);
    }
    verficacion = prompt("Desea agregar un nuevo servicio: yes or no") 
}while(verficacion === 'yes')
mostrar_reservas()

function reservar (nombre) {
    var mascota = prompt("Ingrese el nombre de su mascota");
    // cut = corte de cabello  y shower = banio para mascotas
    var servicio = prompt("Seleccione servicio: cut (5000 pesos) o shower (2500 pesos)"); 
    // Yes = si No = no
    var adicional= prompt("Deseas incluir el adicional de corte higienico por 500 pesos? Responde 'Yes' o 'No'") 
    fecha = prompt("Ingrese fecha con formato DD/MM/AAAA");

    if (servicio === "cut" && adicional === "yes") {
        costo_final = precio_corte + precio_adicional;
    }
    else if(servicio == "shower" && adicional === "yes"){
        costo_final = precio_bano + precio_adicional;
    }
    else if(servicio === "cut" && adicional === "no"){
        costo_final = precio_corte;
    }
    else if(servicio == "shower" && adicional === "no"){
        costo_final = precio_bano;
    }
    const reserva = {
        nombre: nombre,
        mascota: mascota,
        servicio: servicio,
        adicional: adicional,
        fecha: fecha,
        precio : costo_final,
    }
    lista_reservas.push(reserva);

}

function mostrar_reservas(){
    lista_reservas.forEach((reserva) => {
        alert(`${reserva.nombre} tu reserva para el ${reserva.servicio}  a tu mascota ${reserva.mascota} es en la fecha ${reserva.fecha} con el costo ${reserva.precio}`);
    })
}

