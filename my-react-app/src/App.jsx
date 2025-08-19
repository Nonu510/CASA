import './App.css'
import mer from './assets/Image_appartement.png'
import Card from "./components/Card/Card";
import apartments from "../src/assets/data/appartement.json";
import Banner from "../src/components/Banner/Banner";
import { Link } from 'react-router-dom';



function App() {
  return (
    <> 
    <div className='bannerapp'>   
      <Banner
        image={mer}
        title="Chez vous, partout et ailleurs"
      />
    </div>
    <section className="cards-container">
      {apartments.map((apt) => (
        <Link key={apt.id} to={`/appartement/${apt.id}`} style={{ textDecoration: 'none' }}>
          <Card title={apt.title} cover={apt.cover} />
        </Link>
      ))}
    </section>
    </>
  )
}

export default App
