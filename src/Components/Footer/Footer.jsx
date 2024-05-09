import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
    return(
        <footer>
        <div>
            <ul className={styles.footerNav}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"characters"}>Characters</Link></li>
                <li><Link to={"/"}>Arbol genialogico</Link></li>
                <li><Link to={"/"}>Macking off</Link></li>
            </ul>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente accusantium voluptatibus nesciunt omnis, optio nulla odit porro nostrum qui, dolorum molestiae accusamus soluta dolorem non veniam corrupti, recusandae provident incidunt.</p>
    </footer>
    );
}

export default Footer;