'use strict';
const Login = () => {
    const login = $('<div class="login"></div>')
    const title = $('<h1>Login to Laboratoria</h1>');
    const email = $('<input class="username" type="email" placeholder="Correo electrónico">');
    const password = $('<input class="password" type="password" placeholder="Contraseña">');
    const loginButton = $('<button>Ingresar</button>');
    const faceButton = $('<button>Ingresar con Facebook</button>');

    login.append(title);
    login.append(email);
    login.append(password);
    login.append(loginButton);
    login.append(faceButton);
    loginButton.on('click', (e) => {
        e.preventDefault();
        alert('not implement yet');
    });
    faceButton.on('click', (e) => {
        e.preventDefault();
        doLogin();
    });
    return login;
}



const estacion = (station, update) => {

    const contieneItem = $('<div class="containerItem"></div>');
    const nombre = $('<p><b>' + station.name + '</b></p>');
    const direccion = $('<small>' + station.address + '</small><br>');
    const distrito = $('<small>' + station.district + '</small>');
    const iconMap = $('<i class="fa fa-map"></i>');

    contieneItem.append(nombre);
    contieneItem.append(direccion);
    contieneItem.append(distrito);
    contieneItem.append(iconMap);

    /*    contieneItem.on('click',(e) => {
           e.preventDefault();
            state.selectedStation = movie;
            update();
        });*/
    return contieneItem;
}
// esta funcion hace de rerender
const ListadoGas = (GasContainer, distritosFiltrados) => {
    GasContainer.empty();
    distritosFiltrados.forEach((station) => {
        GasContainer.append(estacion(station, _ => (ListadoGas(GasContainer, distritosFiltrados))));
    });
    return GasContainer;
}
