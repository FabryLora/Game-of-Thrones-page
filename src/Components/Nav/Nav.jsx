
import { Link } from "react-router-dom";
import styles from './Nav.module.css';

function Nav() {
    return(
        <header>
        <nav>
            <ul className={styles.linkPagesContainer}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"characters"}>Characters</Link></li>
                <li><Link to={"/"}>Family Tree</Link></li>
                <li><Link to={"/"}>Making off</Link></li>
            </ul>
        </nav>
    </header>
    );
}

export default Nav;