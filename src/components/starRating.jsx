import starEmpty from '../assets/star.svg'
import starFilled from '../assets/star_filled.svg'

const StarRating = ({ rating }) => {
      const filledStars = Math.round(rating)
      const stars = []

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
