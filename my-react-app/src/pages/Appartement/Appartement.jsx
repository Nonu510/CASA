import './Appartement.css';
import apartments from '../../assets/data/appartement.json';
import { useParams, Navigate } from 'react-router-dom';
import AccordionSection from '../../components/accordionsection/accordionSection';
import StarRating from "../../components/Rating/StarRating";

function Appartement() {
    const { id } = useParams();

    const appartement = apartments.find((apt) => apt.id === id);

    if (!appartement) {
        return <Navigate to="/error" />;
    }

    return (
        <>
            <div className='carousel'>
                <img
                    src={appartement.pictures[0]}
                    alt={appartement.title}
                />
            </div>

            <section className="info-container">
                <div className='principal'>
                    <div className='titre'>
                        <h1>{appartement.title}</h1>
                        <p>{appartement.location}</p>
                    </div>
                    <div className='tags'>
                        <ul>
                            {appartement.tags.map((tags, index) => (
                            <li key={index}>{tags}</li>
                            ))}
                        </ul>
                    </div>    
                                        
                </div>
                <div className='notes'>
                        <div className='infos'>
                        <p>{appartement.host.name}</p>
                        <img
                            src={appartement.host.picture}
                            alt={appartement.host.name}
                        />
                        </div>
                        < div className='rating'>                           
                            <StarRating rating={appartement.rating} />
                        </div>
                </div>
            </section>
            <div className='colapse'>
                    <div className='description'>
                    <AccordionSection
                        title="Description"
                        content={appartement.description}
                    />
                    </div>
                    <div className='equipement'>
                    <AccordionSection
                        title="Équipements"
                        content={
                        <ul>
                            {appartement.equipments.map((eq, index) => (
                            <li key={index}>{eq}</li>
                            ))}
                        </ul>
                        }
                    />
                    </div>
                </div>
        </>
    );
}

export default Appartement;

