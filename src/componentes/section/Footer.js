import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp} from "react-icons/fa";
import style from './Footer.module.css'

function Footer(){
    return(
       <main className={style.Footer}> 
            <div>
             <ul>
                    <li><a href='https://wa.me/+5561998481108?text=Ol%C3%A1%20Warlen%2C%20tudo%20bem%3F'><FaWhatsapp size={30}/></a></li>
                    <li><a href='https://www.instagram.com/wtaaaa_1/'><FaInstagram size={30}/></a></li>
                    <li><a href='https://www.linkedin.com/feed/'><FaLinkedin size={30}/></a></li>
                    <li><a href='https://github.com/'><FaGithub size={30}/></a></li>
             </ul>
             <p><strong>G-mail:</strong> warlenlucastavares@gmail.com.</p>
             <p> Warlen Tavares © 2023.</p>
           </div>

       </main>
    )
}

export default Footer 