import '../style/index.css'
import '../style/home.css'
import PropTypes from 'prop-types'

function Card({title}) {
      return (
                  <figure className="location-item">
                        <p>{title}</p>
                  </figure>
      )
}

Card.propTypes = {
      title: PropTypes.string.isRequired,
    }
    
    Card.defaultProps = {
      title: '',
    }

export default Card