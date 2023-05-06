import '../style/index.css'
import '../style/accomodation.css'
import Collapsible from '../components/collapse'

function Accomodation() {
      return (
            <div className="container">

                  <div className="collapsible-container-acc">

                        <Collapsible label="Description">
                              <p className="collapsible-p"></p>
                        </Collapsible>
                        <Collapsible label="Equipements">
                              <p className="collapsible-p"></p>
                        </Collapsible>

                  </div>

            </div>
      )
}

export default Accomodation
