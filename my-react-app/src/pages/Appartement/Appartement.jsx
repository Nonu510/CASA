import './Appartement.css'
import { useState } from 'react';
import Image_informations from '../../assets/Image_informations.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';


function Appartement() {
    const [openSections, setOpenSections] = useState({});
    const Appartementid = useParams ().id
    return (
        <>
    <div className='carousel'>
      
    </div>
    <section className="info-container">
        <div className='titre'></div>
        <div className='infos'></div>
        <div className='colapse'></div>
      </section>
    </>
    );
}

export default Appartement;
