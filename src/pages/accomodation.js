import '../style/index.css'
import '../style/accomodation.css'
import Collapsible from '../components/collapse'
import Slider from '../components/slider'

function Accomodation() {

      return (
            <div className="container">

                  <Slider>
                  </Slider>

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
