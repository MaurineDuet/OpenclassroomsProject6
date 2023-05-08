import { useState } from 'react'
import '../style/slider.css'
import LeftArrow from '../assets/left.png'
import RightArrow from '../assets/right.png'
import { useFetch } from '../hooks/fetch'

function Slider() {
      const { data, error } = useFetch('/logements.json')
      const locationsList = data ?? []
      console.log(locationsList)

      const [current, setCurrent] = useState(0)
      const length = locationsList.length

      const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current + 1)
      }

      const prevSlide = () => {
            setCurrent(current === 0 ? length - 1 : current - 1)
      }

      // Move the conditional rendering logic here
      if (error) {
            return <span>Il y a un problème</span>
      }

      if (!data) {
            return <span>Chargement en cours...</span>
      }

      return (
            <section className="slider">
                  <LeftArrow className="left-arrow" onClick={prevSlide} />
                  <RightArrow className="right-arrow" onClick={nextSlide} />
                  {locationsList.map((slide, index) => {
                        return (
                              <div
                                    className={
                                          index === current
                                                ? 'slide active'
                                                : 'slide'
                                    }
                                    key={slide.id}
                              >
                                    {index === current && (
                                          <div className="image-container">
                                                {slide.pictures.map(
                                                (
                                                            picture,
                                                            pictureIndex
                                                      ) => (
                                                            <img
                                                                  key={
                                                                        pictureIndex
                                                                  }
                                                                  src={picture}
                                                                  alt=""
                                                                  className="image"
                                                            />
                                                      )
                                                )}
                                          </div>
                                    )}
                              </div>
                        )
                  })}
            </section>
      )
}
export default Slider
