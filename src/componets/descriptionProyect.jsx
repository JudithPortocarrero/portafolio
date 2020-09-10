import React from 'react'
import webSite from '../images/web.png';
import logoGit from '../images/logoGit.png';
import './styles/descriptionProyect.scss';

const DescriptionProyectos = ({image, title, description, linkpage, linkgit}) => {
    return(
        <div className='divProyect'>
            <div className='divImgProyect'><img className='imgProyect' src={image} alt={title}/></div>
            <div className='divdescrptionProyect'>
                <div className='titleProyect'>{title}</div>
                <div className='contenido'>{description}</div><br/>
                <div className='linksGitWeb'>
                    <section><a className='liPage' href={linkpage}><img className='linkPage' src={webSite} alt='web'/>Website</a></section>
                    <section><a className='liWeb' href={linkgit}><img className='linkWeb' src={logoGit} alt='GitHub'/>Codigo fiente</a></section>
                </div>
            </div>
        </div>
    )
}
export default DescriptionProyectos;