import '../style/index.css'
import '../style/error.css'
import Button from '../components/button'

function Error () {
    return(
      <div className='kasa-error'>

         <h2>404</h2>
         <p>Oups! La page que vous demandez n'existe pas.</p>
         <Button />

      </div> 
    )
}

 export default Error