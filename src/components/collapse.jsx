import { useState } from 'react'
import arrow from '../assets/arrow.svg'

/* Code pour permetttre la mise en place des collapse (div s'ouvrant et se fermant au clic) */

/* Définition des deux états fermé et ouvert du collapse */

function Collapsible(props) {
      const [open, setOPen] = useState(false)

      /* Set de l'état fermé de base du collapse */

      const toggle = () => {
            setOPen(!open)
      }

      const label = props.label

      /* Rendu de la logique du collapse */

      return (
            <div className="collapsible">
                  <h3 onClick={toggle}>
                        {' '}
                        {label} <img src={arrow} alt="" />
                  </h3>
                  {open && <div className="toggle">{props.children}</div>}
            </div>
      )
}

export default Collapsible
