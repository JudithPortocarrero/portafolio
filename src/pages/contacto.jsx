import React from 'react'
import Cabecera from '../componets/header';
import './stylesPages/contacto.scss';
import linkedin from '../images/linkedin.png';

const Contacto = () => {
    return(
        <div className='containerConocimientos'>
            <Cabecera/>
            <div className='containerdescriptionConocimientos'>
                <div className='titleHome'>Contáctame</div>
                <div className='divContacto'>
                    <p>Judith Bertha Portocarrero Cachique</p>
                    <p><a className='liPage' href='https://www.linkedin.com/in/judith-portocarrero-cachique/'>linkedin<img className='linkedin' src={linkedin} alt='link Linkedin'/></a></p>
                    <p><a className='liPage' href='https://app.talento.laboratoria.la/profile/Xn2oDrCJ3LX9ewXfXSd9wB6hLPI3'>Portafolio<img className='linkedin' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/File-Explorer-fluent-icon.png/220px-File-Explorer-fluent-icon.png' alt='link Portafolio'/></a></p>
                    <p>
                        Correos:<br/>
                        judith086.jpc@gmail.com<br/>
                        judithportocarrero99@hotmail.com
                    </p>
                    <p>
                        Teléfono:<br/>
                        979803191<br/>
                        935744654
                    </p>
                    <p>
                        Mi ubicación: Lima, PERÚ   
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Contacto;