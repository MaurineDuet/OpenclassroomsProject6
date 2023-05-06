import '../style/index.css'
import '../style/home.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Card({ title }) {
      return (
            <Link to="/accomodation">
                  <figure className="location-item">
                        <p>{title}</p>
                  </figure>
            </Link>
      )
}

Card.propTypes = {
      title: PropTypes.string.isRequired,
}

Card.defaultProps = {
      title: '',
}

export default Card
