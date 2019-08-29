import React from 'react';
import Productos from './Productos';
import Footer from './Footer';
import Header from './Header';
// import Header from './Header'; para utlizarla <Header/>

/**
 * Utilizando Props, sirve para pasar parametros, variables de un componente padre a un hijo
 */

class Aplicacion extends React.Component{

    /**
     * state, sirve para menejar los datos del componentes, si ocurre cambios este se encarga de mandarlos a los demas componentes
     * hay dos formas de hacerlo por medio del constructor o por la function componentDidMount, declarando por fuera el state
     * 
     * componentDidMount: es una funcion que se ejecuta al cargar la vista de ese componente,y son parte del ciclo de vida de react
     */

    state = {
        productos: []
    }

    componentDidMount(){
        
        const productos = [
            {nombre:'Libro', precio:200},
            {nombre:'Disco de Música', precio:100},
            {nombre:'Instrumento Musical', precio:800},
            {nombre:'Reproducto Musical', precio:1500},
            {nombre:'Album Ed. Especial', precio:500},
        ];

        
        /**
         * Simular una peticion ajax
         */
        setTimeout( () => {

            /**
             * Para insertar en el state, react tiene una funcion para ello
             */
            this.setState({
                productos: productos
            });
            
        }, 3000)
    }

    /*constructor(props) {
        super();
        this.state = {
            productos: [
                {nombre:'Libro', precio:200},
                {nombre:'Disco de Música', precio:100},
                {nombre:'Instrumento Musical', precio:800},
                {nombre:'Reproducto Musical', precio:1500},
                {nombre:'Album Ed. Especial', precio:500},
            ]
        }
    }*/



    render() {
        
        let titulo = 'Tienda Virtual';

        const productos = [
            {nombre:'Libro', precio:200},
            {nombre:'Disco de Música', precio:100},
            {nombre:'Instrumento Musical', precio:800},
            {nombre:'Reproducto Musical', precio:1500},
            {nombre:'Album Ed. Especial', precio:500},
        ];

        return (
            <div>
                <Header titulo={titulo}/>
                <Productos productos={this.state.productos}/>
                <Footer/>
            </div>
        )
    }
}

export default Aplicacion;