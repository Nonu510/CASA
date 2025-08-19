import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './AccordionSection.css';

function AccordionSection({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

   return (
        <div className="accordion-section">
            <h2 onClick={toggle}>
                {title}
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`arrow ${isOpen ? 'open' : ''}`}
                />
            </h2>
            <div className={`content-definition ${isOpen ? 'open' : ''}`}>
                {typeof content === 'string' ? <p>{content}</p> : content}
            </div>
        </div>
    );
}

export default AccordionSection;
