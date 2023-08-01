import style from './Presentation.module.css'
import ButtonA from '../elementos/ButtonA'

function Presentation(){
         return(
            <div className={style.Presemtation} id='Presentation'>
                <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
                <h1>Olá, eu sou Warlen Tavares!</h1>
                <p>
                Tecnologia sempre foi minha paixão. 
                Atualmente estou me especializando <br/> na área, mas já possuo
                 algumas habilidades em HTML, CSS, JS, REACT E TYPESCRIPT.<br/> 
                A cada dia, mais e mais, estou  em busca de novos conhecimentos
                 na  área de<br/> tecnologia e também em busca de novos projetos. 
                 Assim, ficaria honrado<br/> em mostrar para o (a) senhor (a), 
                 meus conhecimentos e habilidades,<br/> que podem ser aplicados a sua empresa.
                </p>
                <ButtonA link={'https://github.com/'} text='Conecte-se comigo!'/>
                
            </div>
         )
}

export default Presentation