import { Link } from "react-router-dom";
import charactesImage from '../../images/characters.jpg';
import familyTreeImage from '../../images/familytreeextended.webp';
import logo from '../../images/logos/gameofthroneslogo.png';
import makingOffImage from '../../images/mackingoff.webp';
import styles from './Home.module.css';

function Home() {
    return(
    <main>
        <div className={styles.firstHomeSection}>
            <div className={styles.contentIntroContainer}>
                <div className={styles.logoImageContainer}>
                    <img src={logo} width="800px" alt="" />
                </div>
                <p style={{fontSize: '40px'}}> Who will sit on the iron throne? </p>
                <div className={styles.teaserContainer}>
                    <iframe width="1400" height="800" src="https://www.youtube.com/embed/bjqEWgDVPe0" title="GAME OF THRONES - SEASON 1- TRAILER" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>

        <div className={styles.secondHomeSection}>
            <div className={styles.familyTree}>
                <Link to={"/"}>
                    <img src={familyTreeImage} width="500px" alt="arbol familiar" />
                </Link>
                <p>Mira el arbol genialogico y enterate de todos los vinculos entre personajes para entender mas a profundidad la historia<a className={styles.seeMoreButton} href="./pages/familytree.html">Ver mas</a>
                </p>
            </div>

            <div className={styles.characters}>
                <p>Mira el arbol genialogico y enterate de todos los vinculos entre personajes para entender mas a profundidad la historia <a className={styles.seeMoreButton} href="./pages/characters.html">Ver mas</a></p>
                <Link to={"/"}><img src={charactesImage} width="500px" alt="5 de los personajes de la serie" /></Link>
            </div>

            <div className={styles.mackingoff}>
                <Link to={"/"}><img src={makingOffImage} width="500px" alt="foto del macking off" /></Link>
                <p>Mira el arbol genialogico y enterate de todos los vinculos entre personajes para entender mas a profundidad la historia<a className={styles.seeMoreButton} href="./pages/mackingoff.html">Ver mas</a></p>
            </div>
        </div>

        
    </main>
    );
}

export default Home;