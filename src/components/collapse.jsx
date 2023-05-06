import { useState } from 'react'
import arrow from '../assets/arrow.svg'

function Collapsible(props) {
      const [open, setOPen] = useState(false)

      const toggle = () => {
            setOPen(!open)
      }

      const label = props.label

      return (
            <div className='collapsible'>
                  <h3 onClick={toggle}> {label} <img src={arrow} alt="" /></h3>
                  {open && (
                        <div className="toggle">
                              {props.children}
                        </div>
                  )}
            </div>
      )
}

export default Collapsible
