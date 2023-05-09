import '../style/index.css'
import '../style/accomodation.css'
import Collapsible from '../components/collapse'
import Slider from '../components/slider'
import { useFetch } from '../hooks/fetch'

function Accomodation() {
      const { data, error } = useFetch('/logements.json')

      if (error) {
            return <span>Il y a un problème</span>
      }

      return (
            <div className="container">
                  {data?.map((apartment, index) => (
                        <div key={apartment.id}>
                              <Slider currentApartmentIndex={index} />

                              <div className="collapsible-container-acc">
                                    <Collapsible label="Description">
                                          <p className="collapsible-p">
                                                {apartment.description}
                                          </p>
                                    </Collapsible>
                                    <Collapsible label="Equipements">
                                          <ul>
                                                {apartment.equipments.map(
                                                      (equipment, index) => (
                                                            <li key={index}>
                                                                  {equipment}
                                                            </li>
                                                      )
                                                )}
                                          </ul>
                                    </Collapsible>
                              </div>
                        </div>
                  ))}
            </div>
      )
}

export default Accomodation
