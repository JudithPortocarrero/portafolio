import React from 'react'
import { Link } from "react-router-dom";
import './styles/header.scss'

const Cabecera = () => {
    return(
        <header>
            <div className='divNombre'>
                <section>Judith Portocarrero</section>
            </div>
            <div className='divDescripcion'>
                <Link to="/" className='links'>Sobre mí</Link>
                <Link to="/conocimientos" className='links'>Conocimientos</Link>
                <Link to="/proyectos" className='links'>Mis trabajos</Link>
                <Link to="/contacto" className='links'>Contacto</Link>
            </div>
        </header>
    )
}
export default Cabecera;