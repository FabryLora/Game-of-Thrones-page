import PropTypes from 'prop-types';
import styles from './HouseCard.module.css';

function HouseCard(props) {
    return(
        <div className={styles.div} style={{backgroundImage: `url(${props.image})`}}>
            <h2>{props.title}</h2>
            <button>ir</button>
        </div>
    );
}

HouseCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
}

export default HouseCard;