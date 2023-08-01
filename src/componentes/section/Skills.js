import style from './Skills.module.css'
import javascript from '../../image/skill/javascript.svg'
import html from '../../image/skill/html.svg'
import css from '../../image/skill/css.svg'
import react from '../../image/skill/react.svg'
import typescript from '../../image/skill/typescript.svg'

function Skills(){
    return(
       <div className={style.Skills} id='Skills'>
           <h1> HABILIDADES</h1>
           <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
           <div>
               <img src={javascript}/>
               <img src={html}/>
               <img src={css}/>
               <img src={typescript}/>
               <img src={react}/>
           </div>
       </div>
    )
}

export default Skills