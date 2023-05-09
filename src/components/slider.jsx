import { useState, useEffect } from 'react'
import '../style/slider.css'
import LeftArrow from '../assets/left.png'
import RightArrow from '../assets/right.png'
import { useFetch } from '../hooks/fetch'

function Slider({ currentApartmentIndex }) {
      const { data, error } = useFetch('/logements.json')

      const [currentIndex, setCurrentIndex] = useState(0)

      useEffect(() => {
            if (!error && data) {
                  setCurrentIndex(0) // Reset currentIndex when data changes
            }
      }, [data, error])

      let pictures = data?.[currentApartmentIndex]?.pictures || []

      const length = pictures.length
      const nextSlide = () => {
            setCurrentIndex((currentIndex) => {
                  if (length > 0) {
                        return currentIndex === length - 1
                              ? 0
                              : currentIndex + 1
                  }
                  return currentIndex
            })
      }

      const prevSlide = () => {
            setCurrentIndex((currentIndex) => {
                  if (length > 0) {
                        return currentIndex === 0
                              ? length - 1
                              : currentIndex - 1
                  }
                  return currentIndex
            })
      }
      if (!data) {
            return <span>Chargement en cours...</span>
      }

      if (error) {
            return <span>Il y a un problème</span>
      }

      return (
            <section className="slider">
                  <LeftArrow className="left-arrow" onClick={prevSlide} />
                  <RightArrow className="right-arrow" onClick={nextSlide} />
                  {pictures.map((slide, index) => {
                        return (
                              <div
                                    className={
                                          index === currentIndex
                                                ? 'slide active'
                                                : 'slide'
                                    }
                                    key={slide}
                              >
                                    {index === currentIndex && (
                                          <div className="image-container">
                                                <img
                                                      src={slide}
                                                      alt=""
                                                      className="image"
                                                />
                                          </div>
                                    )}
                              </div>
                        )
                  })}
            </section>
      )
}

export default Slider

// function Slider() {
//       const { data, error } = useFetch('/logements.json')
//       const locationsList = data ?? []
//       console.log(locationsList)

//       const [current, setCurrent] = useState(0)
//       const length = locationsList.length

//       const nextSlide = () => {
//             setCurrent(current === length - 1 ? 0 : current + 1)
//       }

//       const prevSlide = () => {
//             setCurrent(current === 0 ? length - 1 : current - 1)
//       }

//       // Move the conditional rendering logic here
//       if (error) {
//             return <span>Il y a un problème</span>
//       }

//       if (!data) {
//             return <span>Chargement en cours...</span>
//       }

//       return (
//             <section className="slider">
//                   <LeftArrow className="left-arrow" onClick={prevSlide} />
//                   <RightArrow className="right-arrow" onClick={nextSlide} />
//                   {locationsList.map((slide, index) => {
//                         return (
//                               <div
//                                     className={
//                                           index === current
//                                                 ? 'slide active'
//                                                 : 'slide'
//                                     }
//                                     key={slide.id}
//                               >
//                                     {index === current && (
//                                           <div className="image-container">
//                                                 {slide.pictures.map(
//                                                 (
//                                                             picture,
//                                                             pictureIndex
//                                                       ) => (
//                                                             <img
//                                                                   key={
//                                                                         pictureIndex
//                                                                   }
//                                                                   src={picture}
//                                                                   alt=""
//                                                                   className="image"
//                                                             />
//                                                       )
//                                                 )}
//                                           </div>
//                                     )}
//                               </div>
//                         )
//                   })}
//             </section>
//       )
// }
// export default Slider
