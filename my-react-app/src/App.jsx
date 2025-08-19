import './App.css'
import mer from './assets/Image_appartement.png'
import Card from "./components/Card/Card";
import apartments from "../src/assets/data/appartement.json";
import { Link } from 'react-router-dom';



function App() {
  return (
    <>
    <div className='banner'>
      <img src={mer} alt="mer" />
      <p>Chez vous, partout et ailleurs</p>
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
