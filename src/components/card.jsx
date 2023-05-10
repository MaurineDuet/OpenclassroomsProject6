import '../style/index.css'
import '../style/home.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Card({ title, id }) {

      return (
            <Link to={`/accomodation/${id}`}>
                  <figure className="location-item">
                        <p>{title}</p>
                  </figure>
            </Link>
      )
}

Card.propTypes = {
      title: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
          ]).isRequired,
          // onClick: PropTypes.func.isRequired,
        }

Card.defaultProps = {
      title: '',
      id: '',
      // onClick: () => {},
}

export default Card


// function Card({ title, id, onClick }) {
//       function handleClick() {
//             onClick(id);
//           }

//       return (
//             <Link to={`/accomodation/${id}`} onClick={handleClick}>
//                   <figure className="location-item">
//                         <p>{title}</p>
//                   </figure>
//             </Link>
//       )
// }
