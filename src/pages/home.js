import '../style/index.css'
import '../style/home.css'

function Home() {
      return (
            <div className="container">

                  <h1 className="kasa-main-title">
                        Chez vous, partout et ailleurs
                  </h1>

                  <section className='kasa-main-content'>
                        <figure className='location-item'>
                        <p>Titre de la location</p>
                        </figure>

                        <figure className='location-item'>
                        <p>Titre de la location</p>
                        </figure>

                        <figure className='location-item'>
                        <p>Titre de la location</p>
                        </figure>
                  </section>
            </div>
      )
}

export default Home
