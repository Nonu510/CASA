import './carrousel.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({ images, title }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!images || images.length === 0) return null;

    return (
        <div className='carousel'>
            <button className='carousel-btn prev' onClick={prevSlide}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <img
                src={images[current]}
                alt={`${title} - ${current + 1}`}
                className='carousel-image'
            />
            <button className='carousel-btn next' onClick={nextSlide}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <span className='carousel-counter'>{current + 1}/{images.length}</span>
        </div>
    );
};

export default Carousel;
