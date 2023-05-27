import { useState, useEffect } from 'react'
import '../style/slider.css'
import LeftArrow from '../assets/left.png'
import RightArrow from '../assets/right.png'
import PropTypes from 'prop-types'

/* Code permettant la mise en place du slider de photo pour chaque appartement */

function Slider({ selectedHome }) {
      const [current, setCurrent] = useState(0)

      const pictures = selectedHome.pictures || []
      const length = pictures.length

      /* Mise en place des fonctions avancer et reculer au clic sur les flèches */

      const nextSlide = () => {
            if (current === length - 1) {
                  setCurrent(0)
            } else {
                  setCurrent(current + 1)
            }
      }

      const prevSlide = () => {
            if (current === 0) {
                  setCurrent(length - 1)
            } else {
                  setCurrent(current - 1)
            }
      }

      useEffect(() => {
            setCurrent(0)
      }, [])

      /* Set du rendu si il n'y a qu'une image ou moins pour l'appartement sélectionné */

      if (length <= 1) {
            return (
                  <section className="slider">
                        {pictures.map((picture, index) => (
                              <img
                                    key={index}
                                    src={picture}
                                    alt=""
                                    className="slide active"
                              />
                        ))}
                  </section>
            )
      }

      /* Set du rendu si il y a plusieurs images pour l'appartement sélectionné */

      return (
            <section className="slider">
                  <img
                        className="left-arrow"
                        src={LeftArrow}
                        alt="left-arrow"
                        onClick={prevSlide}
                  />
                  <div className="slider-counter">
                        {current + 1} / {length}
                  </div>
                  <img
                        className="right-arrow"
                        src={RightArrow}
                        alt="right-arrow"
                        onClick={nextSlide}
                  />
                  {pictures.map((picture, index) => {
                        return (
                              <img
                                    key={index}
                                    src={picture}
                                    alt=""
                                    className={
                                          index === current
                                                ? 'slide active'
                                                : 'slide'
                                    }
                              />
                        )
                  })}
            </section>
      )
}

/* Définition des éléments attendus (props) dans le slider */

Slider.propTypes = {
      selectedHome: PropTypes.object.isRequired,
}

export default Slider