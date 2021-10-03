import React from 'react'
import './estilo.css'
import imagem3 from '../Curiosidades/demonstration.png'
import imagem4 from '../Curiosidades/logo.svg'

export default function Curiosidades() {
    return(
            <section>
                <h1> Curiosidades</h1>
                <div data-aos="fade-down-right" data-aos-duration="2000">
                    <div class="container3">
                        <img class="imagem3" alt="" src={imagem3}/>
                        <p class="curiosidades">Fui contribuinte para um projeto de pesquisa da PIBIC (Programa Institucional de Bolsas de Iniciação Científica), onde trabalhei com microcontroladores (Arduino & Esp32), usando softwares como vue.js, JavaScript, express, electron etc. 
                            O projeto visava o uso desses microcontroladores para controle de Silos, onde por isso o projeto recebeu nome de "SmartSilo". <br/>
                        </p>
                    </div>
                    </div>

                    <div data-aos="fade-up-left" data-aos-duration="2000">
                    <div class="container3">
                        <p class="curiosidades1">
                            Atualmente faço parte da empresa Junior EJECT, onde atuo como UX/UI e também faço parte de uma bolsa de pesquisa sobre Suporte à Análise e Visualização de Séries Temporais na Plataforma Geo-referenciada para Desenvolvimento de Aplicações para Cidades Inteligentes.
                        </p>
                        <img class="imagem4" alt="" src={imagem4}/>
                    </div>
                    </div>
                



            </section>

    )
}