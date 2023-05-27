import '../style/index.css'
import '../style/home.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/* Code pour permetttre la mise en place de la Card (miniature des appartements sur la page d'accueil) */

function Card({ title, id, cover }) {

      return (
            <Link to={`/accommodation/${id}`}>
                  <figure className="location-item">
                        <img src={cover} alt="" />
                        <p>{title}</p>
                  </figure>
            </Link>
      )
}

/* Définition du type des éléments composants la Card */

Card.propTypes = {
      title: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
          ]).isRequired,
        }

Card.defaultProps = {
      title: '',
      id: '',
}

export default Card