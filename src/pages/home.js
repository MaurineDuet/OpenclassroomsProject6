import '../style/index.css'
import '../style/home.css'
import Banner from '../components/banner'
import Card from '../components/card'
import { useFetch } from '../hooks/fetch'

/* Fetch du json correspondant aux appartements et affichages selon les réponses du server */

function Home() {
      const { data, error } = useFetch('/logements.json')
      const locationsList = data

      if (error) {
            return <span>Il y a un problème</span>
      }

      return (
            <div className="container">
                  <Banner
                        title="Chez vous, partout et ailleurs"
                        backgroundImage="./background.jpg"
                  />

                  <section className="kasa-main-content">
                        {locationsList?.map((house, index) => (
                              <Card
                                    key={house.id}
                                    title={house.title}
                                    id={house.id}
                                    cover={house.cover}
                              />
                        ))}
                  </section>
            </div>
      )
}

export default Home
