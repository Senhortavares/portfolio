import ButtonB from '../elementos/ButtonB'
import Style from '../section/Projects.module.css'
import Cards from '../elementos/Cards'
import img from '../../image/projects/londing.svg'
import cap from '../../image/projects/Captura de tela 2023-07-28 170025.png'

function Projects(){
    return(
       <div className={Style.Projects} id='Projects'>
           <h1>PROJETOS</h1>
           <Cards
           img={img}
           title="LONDING-PAGE:"
           tech="HTML, CSS e JS"
           description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia" 
           repo="https://github.com/Senhortavares/Projeto-londing-Page"
           site="https://calm-praline-3668b0.netlify.app/"/>
           <Cards
           img={cap}
             title="LONDING-PAGE:"
             tech="HTML, CSS e JS"
             description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia" 
             repo="https://github.com/Senhortavares/Projeto-londing-Page"
             site="https://calm-praline-3668b0.netlify.app/"/>
           
           
         
       </div>
    )
}

export default Projects