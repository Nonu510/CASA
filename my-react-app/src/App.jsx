import './App.css'
import mer from './assets/Image_appartement.png'
import Card from "./components/Card/Card";
import apartments from "../src/assets/data/appartement.json";
// import { useParams } from "react-router";



function App() {
  return (
    <>
    <div className='banner'>
      <img src={mer} alt="mer" />
      <p>Chez vous, partout et ailleurs</p>
    </div>
    <section className="cards-container">
        {apartments.map((apt) => (
          <Card key={apt.id} title={apt.title} cover={apt.cover} />
        ))}
      </section>
    </>
  )
}

export default App
