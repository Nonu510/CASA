import { useState } from 'react';
import Image_informations from '../../assets/Image_informations.png';
import sectionsData from "../../assets/data/rules.json"
import './Info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// const sectionsData = 

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
                                icon={faChevronDown}
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
