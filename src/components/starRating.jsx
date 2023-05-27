import starEmpty from '../assets/star.svg'
import starFilled from '../assets/star_filled.svg'

/* Code permettant la mise en place du stsème de rating via des étoiles */

const StarRating = ({ rating }) => {
      const filledStars = Math.round(rating)
      const stars = []

      /* Logique de mise en place des étoiles : si le numéro de l'étoile est inférieur ou égal au numéro de rating donné à l'appartement, 
      la fonction push une image d'étoile pleine, sinon elle push une image d'étoile vide */

      for (let i = 1; i <= 5; i++) {
            if (i <= filledStars) {
                  stars.push(
                        <img
                              key={i}
                              className="star"
                              src={starFilled}
                              alt="star-filled"
                        />
                  )
            } else {
                  stars.push(
                        <img
                              key={i}
                              className="star"
                              src={starEmpty}
                              alt="star-empty"
                        />
                  )
            }
      }

      return <div>{stars}</div>
}

export default StarRating
