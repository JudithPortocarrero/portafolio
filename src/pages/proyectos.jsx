import React from 'react'
import Cabecera from '../componets/header';
import DescriptionProyectos from '../componets/descriptionProyect';
import './stylesPages/proyectos.scss';

const Proyectos = () => {
    return(
        <div className='containerProyectos'>
            <Cabecera/>
            <div>
                <div className='titleHome'>Mis trabajos</div>
                <div className='contenedorDescriptionProyectos'>
                    <DescriptionProyectos 
                        image={'https://github.com/JudithPortocarrero/LIM012-fe-social-network/blob/master/img/3.png?raw=true'} 
                        title={'Red Social - Vida Sana'} 
                        description={'Este proyecto fue desarrollado, con la finalidad de que las personas que inicien o esten llevando una alimentación sana, puedan registrarse para publicar un post, modificarlo, eliminarlo, realizar comentarlos y dar like. De esta manera lograr mayor interacción entre los usuarios'} 
                        linkpage={'https://judithportocarrero.github.io/LIM012-fe-social-network/src/'} 
                        linkgit={'https://github.com/JudithPortocarrero/LIM012-fe-social-network'}
                    /><br/>
                    <DescriptionProyectos 
                        image={'https://raw.githubusercontent.com/JudithPortocarrero/LIM012-fe-burger-queen/master/src/burger.png'} 
                        title={'Sistema de Comida - Burger Queen'} 
                        description={'Este proyecto sirve para agilizar los procesos que se llevan acabo en un restaurante, donde el mesero podrá realizar y enviar un pedido a cocina para que sea visualizado por el cocinero, una vez terminado se marcara como terminado para que el mesero lo visualice y lo sirva'} 
                        linkpage={'https://github.com/JudithPortocarrero/LIM012-fe-burger-queen'} 
                        linkgit={'https://github.com/JudithPortocarrero/LIM012-fe-burger-queen'}
                    /><br/>
                    <DescriptionProyectos 
                        image={'https://github.com/JudithPortocarrero/LIM012-data-lovers/blob/master/imagenes/prototipoAlta1.png?raw=true'} 
                        title={'Guia de uso del juego Pokemon GO'} 
                        description={'Este proyecto fue diseñado e implementado pensando en los requerimientos de los usuarios nuevos en el juego Pokemon Go para que puedan buscar, ordenar, filtrar y comparar datos, segun su necesidad que que le servirán para poder avanzar de niveles en el juego.'} 
                        linkpage={'https://judithportocarrero.github.io/LIM012-data-lovers/src/index.html'} 
                        linkgit={'https://github.com/JudithPortocarrero/LIM012-data-lovers'}
                    /><br/>
                </div>
            </div>
        </div>
    )
}
export default Proyectos;