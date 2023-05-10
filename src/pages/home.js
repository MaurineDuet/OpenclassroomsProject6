import '../style/index.css'
import '../style/home.css'
import Banner from '../components/banner'
import Card from '../components/card'
import { useFetch } from '../hooks/fetch'

function Home() {
      const { data, error } = useFetch('/logements.json')
      const locationsList = data

      if (error) {
            return <span>Il y a un problème</span>
      }

      return (
            <div className="container">
                  <Banner></Banner>

                  <section className="kasa-main-content">
                        {locationsList?.map((house, index) => (
                              <Card key={house.id} title={house.title} id={house.id} />
                        ))}
                  </section>
            </div>
      )
}


export default Home
