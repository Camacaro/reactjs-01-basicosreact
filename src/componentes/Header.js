import React, { Component } from 'react';

/*class Header extends Component {
    render() {
        return (
            <header>
                <h1>Tienda Virtual</h1>
            </header>
        );
    }
}*/

/**
 * Para recibir los parametros que envia el padre, por props, hay que pasarlos por parametro a la funcion
 */
const Header = (props) => {
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}

export default Header;