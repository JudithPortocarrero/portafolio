import React from 'react'
import Cabecera from '../componets/header';
import github from '../images/github.png';
import react from '../images/react.png';
import javascript from '../images/javascript.png';
import html from '../images/html.png';
import node from '../images/node.png';
import css from '../images/css.png';
import sass from '../images/sass.png';
import firebase from '../images/firebase.png';
import git from '../images/git.png';
import figma from '../images/figma.png'
import './stylesPages/conocimientos.scss';

const Conociminetos = () => {
    return(
        <div className='containerConocimientos'>
            <Cabecera/>
            <div className='containerdescriptionConocimientos'>
                <div className='titleHome'>Conocimientos</div>
                <div className='containerTable'>
                    <table>
                        <tbody>
                            <tr>
                                <td><img className='imgGithub' src={github} alt='imagen GitHub'/></td>
                                <td><img className='imgReact' src={react} alt='imagen React'/></td>
                                <td><img className='imgJavascript' src={javascript} alt='imagen Javascript'/></td>
                                <td><img className='imgHtml' src={html} alt='imagen HTML'/></td>
                                <td><img className='imgNode' src={node} alt='imagen Node'/></td>
                            </tr>
                            <tr>
                                <td><img className='imgCss' src={css} alt='imagen CSS'/></td>
                                <td><img className='imgSass' src={sass} alt='imagen Sass'/></td>
                                <td><img className='imgFirebase' src={firebase} alt='imagen Firebase'/></td>
                                <td><img className='imgGit' src={git} alt='imagen Git'/></td>
                                <td><img className='imgFigma' src={figma} alt='imagen Figma'/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Conociminetos;