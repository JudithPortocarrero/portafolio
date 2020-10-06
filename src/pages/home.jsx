import React from 'react';
import Cabecera from '../componets/header';
import './stylesPages/home.scss'
import profile from '../images/perfil.png'
import cv from '../images/cv.png'

const Home = () => {
    return(
        <div className='containerHome'>
            <Cabecera/>
            <div className='containerDescriptionHome'>
                <div className='titleHome'>Front end developer</div>
                <div className='bodyHome'>
                    <section className='containerImage'><img className='imgProfile' src={profile} alt=''foto de perfil/></section>
                    <div className='containesDescription'>
                        <section className='sobremi'>
                            Desde muy pequeña tuve admiración por la tecnología para poder descubrir el porque 
                            de las cosas, fue ahi donde me encontre con mundo lleno de posibilidades infinitas
                            por explorar. En cada linea de código encontré mi pasión ya que puedo descubrir 
                            una solución optima para cada problema usando las habilidades necesarias que adquirí
                            a lo largo de mi carrera.
                            <br/>
                            Soy estudiante de VII ciclo la Universidad Nacional Federico Villareal 
                            de la carrera de Ingeniería Informática y para complementar estos estudios
                            me prepare en un curso intensivo como Front end developer en Laboratoria<br/><br/>
                            <section><a className='cv' href='https://drive.google.com/file/d/1tWWiXjxYy9_VJhcRI3m6SlYiwe33EAc9/view?usp=sharing'><img className='logoCurriculum' src={cv} alt='logo curriculum'/>Ver Curriculum</a></section>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;