const guardarContacto = (db,contacto) => {
    db.setItem(contacto.id  ,JSON.stringify(contacto));
    window.location.href = "/"
}

const cargarContactos = (db,parentNode)=> {
    let claves = Object.keys(db);
    for(clave of claves)
    {
        let contacto = JSON.parse(db.getItem(clave));
        crearContactos(parentNode, contacto, db);
    }
}

const crearContactos = (parentNode, contacto, db) => {
    let divContacto = document.createElement("div");
    let nombreContacto  = document.createElement("h3");
    let numeroContacto = document.createElement("p");
    let direccionContacto = document.createElement("p");
    let iconoBorrar = document.createElement("span");

    iconoBorrar.onclick = ()=> {
        db.removeItem(contacto.id);
        window.location.href = "/"
    }

    nombreContacto.innerHTML = contacto.nombre;
    numeroContacto.innerHTML = contacto.numero;
    direccionContacto.innerHTML = contacto.direccion;
    iconoBorrar.innerHTML = "delete";
    divContacto.classList.add("listado-tareas");
    iconoBorrar.classList.add("material-icons",  "icono");

    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(numeroContacto);
    divContacto.appendChild(direccionContacto);
    divContacto.appendChild(iconoBorrar);

    parentNode.appendChild(divContacto);

}

