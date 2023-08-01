import style from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp} from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'
function Navbar()
{
        return(
               <div className={style.Navbar}>
                    <ul>
                       <li><Nav.Link href='#Presention'><strong>APRESENTAÇÃO</strong></Nav.Link></li>
                       <li><Nav.Link href='#Skills'><strong>HABILIDADES</strong></Nav.Link></li>
                       <li><Nav.Link href='#Projects'><strong>PROJETOS</strong></Nav.Link></li>
                    </ul>
                    <ul>
                       <li><a href='https://wa.me/+5561998481108?text=Ol%C3%A1%20Warlen%2C%20tudo%20bem%3F'><FaWhatsapp size={30}/></a></li>
                       <li><a href='https://www.instagram.com/wtaaaa_1/'><FaInstagram size={30}/></a></li>
                       <li><a href='https://www.linkedin.com/feed/'><FaLinkedin size={30}/></a></li>
                       <li><a href='https://github.com/'><FaGithub size={30}/></a></li>
                    </ul>
               </div>
        )  
}
  export default Navbar