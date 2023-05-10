import '../style/index.css'
import '../style/accommodation.css'
import Collapsible from '../components/collapse'
import Slider from '../components/slider'
import { useFetch } from '../hooks/fetch'
import { useParams } from 'react-router-dom'

function Accommodation() {
      const { id } = useParams()
      const { data, error } = useFetch('/logements.json')
      // console.log(data)

      if (error) {
            return <span>Il y a un problème</span>
      }

      if (!data) {
            return <span>Chargement en cours...</span>
      }

      // Use the == operator to perform a more relaxed equality check
      // eslint-disable-next-line eqeqeq
      const selectedHome = data.find((obj) => obj.id == id)

      // Log some helpful information for troubleshooting
      // console.log('id:', id)
      // console.log('selectedHome:', selectedHome)

      if (!selectedHome) {
            return <span>Aucun logement trouvé pour l'ID {id}</span>
      }

      return (
            <div className="container">
                  <div className="container-acc">
                        <Slider selectedHome={selectedHome} />

                        <section className='acc-up'>
                              <div className="acc-header">
                                    <div className="acc-title">
                                          <h2>{selectedHome.title}</h2>
                                          <p>{selectedHome.location}</p>
                                    </div>

                                    <div className="acc-host">
                                          <p>{selectedHome.host.name}</p>
                                          <img
                                                src={selectedHome.host.picture}
                                                alt="Host_picture"
                                          />
                                    </div>
                              </div>

                              <ul className="acc-tags">
                                    {selectedHome.tags.map((tag, index) => (
                                          <li key={index}>{tag}</li>
                                    ))}
                              </ul>
                              <div></div>
                        </section>

                        <section className="acc-collapse-container">
                              <Collapsible label="Description">
                                    <p className="collapsible-p">
                                          {selectedHome.description}
                                    </p>
                              </Collapsible>
                              <Collapsible label="Equipements">
                                    <ul>
                                          {selectedHome.equipments.map(
                                                (equipment, index) => (
                                                      <li key={index}>
                                                            {equipment}
                                                      </li>
                                                )
                                          )}
                                    </ul>
                              </Collapsible>
                        </section>
                  </div>
            </div>
      )
}

export default Accommodation

/* <ul>
                              {selectedHome.pictures.map((picture, index) => (
                                    <li key={index}>
                                          <img src={picture} alt=''/>
                                    </li>
                              ))}
                        </ul> */

// return (
//       <div className="container">
//             {data?.map((apartment, index) => (
//                   <div key={apartment.id}>
//                         <Slider pictures={apartment.pictures} />

//                         <div className="collapsible-container-acc">
//                               <Collapsible label="Description">
//                                     <p className="collapsible-p">
//                                           {apartment.description}
//                                     </p>
//                               </Collapsible>
//                               <Collapsible label="Equipements">
//                                     <ul>
//                                           {apartment.equipments.map(
//                                                 (equipment, index) => (
//                                                       <li key={index}>
//                                                             {equipment}
//                                                       </li>
//                                                 )
//                                           )}
//                                     </ul>
//                               </Collapsible>
//                         </div>
//                   </div>
//             ))}
//       </div>
// )
// }
