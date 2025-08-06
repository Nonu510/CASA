import { useState } from 'react';
import Image_informations from '../../assets/Image_informations.png';
import './Info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const sectionsData = [
    {
        title: 'Fiabilité',
        content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
        title: 'Respect',
        content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: 'Service',
        content: "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
    },
    {
        title: 'Sécurité',
        content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
];

function Informations() {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (index) => {
        setOpenSections((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <section className="info">
            <img src={Image_informations} alt="falaise" />
            <div className="rules">
                {sectionsData.map((section, index) => (
                    <div key={index}>
                        <h2 onClick={() => toggleSection(index)}>
                            {section.title}
                            <FontAwesomeIcon
                                icon={faChevronUp}
                                className={`arrow ${openSections[index] ? 'open' : ''}`}
                            />
                        </h2>
                        <p className={`content-definition ${openSections[index] ? 'open' : ''}`}>
                            {section.content}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Informations;
