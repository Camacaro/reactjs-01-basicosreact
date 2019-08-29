import React from 'react';
import Producto from './Producto';
// import Header from './Header'; para utlizarla <Header/>

/**
 * Con el Object.Keys vamos a interar cada producto
 * utlizamos el this.props para poder acceder a la varibale que nos envia el padre
 */
class Productos extends React.Component{
    render() {
        return (
            <div>
                <h2>Listado de Productos</h2>

                { Object.keys( this.props.productos ).map( key => {
                    
                    return (
                        <Producto 
                            key= {key}
                            producto={this.props.productos[key]}
                        />
                    ) 

                } ) }
                
                
            </div>
        )
    }
}

export default Productos;