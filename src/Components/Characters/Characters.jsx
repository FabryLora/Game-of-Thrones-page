import Baratheon from '../../images/houses/Baratheon.webp';
import Hightower from '../../images/houses/Hightower.webp';
import Lannister from '../../images/houses/Lannister.webp';
import Martell from '../../images/houses/Martell.webp';
import Stark from '../../images/houses/Stark.webp';
import Targaryen from '../../images/houses/Targaryen.webp';
import HouseCard from '../HouseCard/HouseCard.jsx';
import styles from './Characters.module.css';
import CharactersBanner from './CharactersBanner.jsx';
import * as objects from './CharactersObject.jsx';

function Characters() {
    return(
        <main>
            <div className={styles.firstCharactersSection}>
                <HouseCard title='Baratheon' image={Baratheon}></HouseCard>
                <HouseCard title='Hightower' image={Hightower}></HouseCard>
                <HouseCard title='Lannister' image={Lannister}></HouseCard>
                <HouseCard title='Martell' image={Martell}></HouseCard>
                <HouseCard title='Stark' image={Stark}></HouseCard>
                <HouseCard title='Targaryen' image={Targaryen}></HouseCard>
            </div>
            <CharactersBanner character={objects.jonSnow} right={true}/>
            <CharactersBanner character={objects.eddardStark} />
            <CharactersBanner character={objects.branStark} right={true} />
            <CharactersBanner character={objects.sansaStark} />
            <CharactersBanner character={objects.ariaStark} right={true} />
            <CharactersBanner character={objects.daenerys} />
            <CharactersBanner character={objects.rhaegarTargaryen} right={true} />
            
        </main>
    );
}

export default Characters;