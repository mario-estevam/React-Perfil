import React from 'react'
import './estilo.css'
import imagem from '../Inicio/pp.jpg'
import imagem2 from '../Inicio/image.png'
export default function Inicio() {
    return (
        <section>
            <div class="container1">
                <img class="perfil" alt="" src={imagem}/>
                <p class="paragrafo"> Olá, eu me chamo <strong class="color"> Mario Estevam </strong>  <br/> e este é meu perfil. </p>
            </div>

           <div class="container2">
              
                <p class="paragrafo2">
                Bem, sou um desenvolvedor/programador iniciante, cursando atualmente o curso de Analise e Desenvolvimento de Sistemas na Universidade Federal do Rio Grande do Norte (UFRN), busco novos desafios e oportunidades para melhorar minhas habilidades e poder crescer profissionalmente. Minha experiência com programação vem desde o ensino médio, onde estudei numa escola técnica e lá tive a oportunidade de programar pela primeira vez, além de também ter meu primeiro contato com sistemas embarcados, programei um Arduino para fazer o gerenciamento (controle de umidade e temperatura) de um prototipo de estufa bacteriológica. Pouco a pouco fui me interessando mais pela área de programação, até que decidi cursar o TADS (Tecnologo em Analise e Desenvolvimento de Sistemas), 
                atualmente estou no 4° período e cada vez mais me apaixonando ainda mais pelo curso, desenvolvendo projetos e afins.
                </p>   
                <img class="ajust" alt="" src={imagem2}/>
            </div> 

        </section>
    )
}
