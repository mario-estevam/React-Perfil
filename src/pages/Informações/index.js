import React from 'react'
import './estilo.css'
import imagem5 from '../Informações/linguagens3.png'
export default function Informacoes() {
    return(
        <section>
            <h1>Informações</h1>
            <div data-aos="fade-right" data-aos-duration="2000">
            <div class="container4">
                 <p class="informacoes">
                        <h4>Formação</h4>
              
                                <ul>
                                    <li>Ensino médio completo (CEEP - Professora lourdinha guerra)</li>
                                    <li>Técnico em manutenção e suporte de Computadores</li>
                                    <li>Cursando análise e Desenvolvimento de sistemas (UFRN)</li>
                                </ul>
                        </p>
            </div>

            </div>
        
            <div data-aos="fade-left" data-aos-duration="2000">
            <div class="container4">
                        <p class="informacoes">
                    <h4>Linguagens e frameworks</h4>
                        <ul>
                            <li>C++</li>
                            <li>Java</li>
                            <li>Javascript</li>
                            <li>Spring web</li>
                            <li>React js</li>
                            <li>Html e css</li>
                        </ul>
                        </p>
                        <img class="imagem5" alt="" src={imagem5}/>
             </div>
            </div>
             

                
        </section>
    )
}    