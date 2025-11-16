import {FaFacebook, Fafacebook, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return(
        <foorte>
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedinIn/></li>
            </ul>
            <p>Nosso rodapé</p>
        </foorte>
    )
}

export default Footer