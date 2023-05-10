import { useState, useEffect } from 'react'
import '../style/slider.css'
import LeftArrow from '../assets/left.png'
import RightArrow from '../assets/right.png'
import PropTypes from 'prop-types'

function Slider({ selectedHome }) {
      const [current, setCurrent] = useState(0)

      const pictures = selectedHome.pictures || []
      console.log(pictures)
      const length = pictures.length
      console.log(length)

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

      return (
            <section className="slider">
                  <img
                        className="left-arrow"
                        src={LeftArrow}
                        alt="left-arrow"
                        onClick={prevSlide}
                  />
                  <img
                        className="right-arrow"
                        src={RightArrow}
                        alt="right-arrow"
                        onClick={nextSlide}
                  />
                  {pictures.map((picture, index) => {
                        return <img key={index} src={picture} alt="" className={index === current ? "image active" : "image"} />
                  })}
            </section>
      )
}

Slider.propTypes = {
      selectedHome: PropTypes.object.isRequired,
}

export default Slider

/* // function Slider({ currentApartmentIndex, id }) { */
/* //       const { data, error } = useFetch(`/logements/${id}.json`)
//       console.log(data)
//       const [currentIndex, setCurrentIndex] = useState(0)

//       useEffect(() => { */
/* //             if (!error && data) { */
//                   setCurrentIndex(0) // Reset currentIndex when data changes
//             }
//       }, [data, error])

//       let pictures = data?.pictures || []

//       const length = pictures.length
//       const nextSlide = () => {
//             setCurrentIndex((currentIndex) => {
//                   if (length > 0) {
//                         return currentIndex === length - 1
//                               ? 0
//                               : currentIndex + 1
//                   }
//                   return currentIndex
//             })
//       }

//       const prevSlide = () => {
//             setCurrentIndex((currentIndex) => {
//                   if (length > 0) {
//                         return currentIndex === 0
//                               ? length - 1
//                               : currentIndex - 1
//                   }
//                   return currentIndex
//             })
//       }
//       if (!data) {
//             return <span>Chargement en cours...</span>
//       }

//       if (error) {
//             return <span>Il y a un problème</span>
//       }

//       return (
//                   <section className="slider">
//                         <LeftArrow
//                               className="left-arrow"
//                               onClick={prevSlide}
//                         />
//                         <RightArrow
//                               className="right-arrow"
//                               onClick={nextSlide}
//                         />
//                         {pictures.map((slide, index) => {
//                               return (
//                                     <div
//                                           className={
//                                                 index === currentIndex
//                                                       ? 'slide active'
//                                                       : 'slide'
//                                           }
//                                           key={slide}
//                                     >
//                                           {index === currentIndex && (
//                                                 <div className="image-container">
//                                                       <img
//                                                             src={slide}
//                                                             alt=""
//                                                             className="image"
//                                                       />
//                                                 </div>
//                                           )}
//                                     </div>
//                               )
//                         })}
//                   </section>
//             </Link>
//       )
// }

// Slider.propTypes = {
//       currentApartmentIndex: PropTypes.number.isRequired,
//       id: PropTypes.string.isRequired,
// }

// export default Slider

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
