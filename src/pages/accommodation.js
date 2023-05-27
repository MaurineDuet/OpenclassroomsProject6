import '../style/index.css'
import '../style/accommodation.css'
import '../style/collapse.css'

import Collapsible from '../components/collapse'
import Slider from '../components/slider'
import StarRating from '../components/starRating'
import { useFetch } from '../hooks/fetch'
import { useParams } from 'react-router-dom'
import Error from './error'

/* Fetch du json correspondant aux appartements et affichages selon les réponses du server */

function Accommodation() {
      const { id } = useParams()
      const { data, error } = useFetch('/logements.json')

      if (error) {
            return <span>Il y a un problème</span>
      }

      if (!data) {
            return <span>Chargement en cours...</span>
      }

      // eslint-disable-next-line
      const selectedHome = data.find((obj) => obj.id == id)

      if (!selectedHome) {
            return <Error />
      }

      return (
            <div className="container">
                  <div className="container-acc">
                        <Slider selectedHome={selectedHome} />

                        <section className="acc-up">
                              <div className="acc-header">
                                    <div className="acc-title">
                                          <h2>{selectedHome.title}</h2>
                                          <p>{selectedHome.location}</p>
                                    </div>

                                    <div className="acc-host">
                                          
                                          <p>
                                                {selectedHome.host.name
                                                      .split(' ')
                                                      .join('\n')}
                                          </p>
                                          <img
                                                src={selectedHome.host.picture}
                                                alt="Host_picture"
                                          />
                                    </div>
                              </div>

                              <div className="acc-middle">
                                    <ul className="acc-tags">
                                          {selectedHome.tags.map(
                                                (tag, index) => (
                                                      <li key={index}>{tag}</li>
                                                )
                                          )}
                                    </ul>

                                    <StarRating rating={selectedHome.rating} />
                              </div>
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