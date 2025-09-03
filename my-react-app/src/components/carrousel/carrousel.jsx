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

    const hasMultipleImages = images.length > 1;

    return (
        <div className='carousel'>
            {hasMultipleImages && (
                <button className='carousel-btn prev' onClick={prevSlide}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            )}

            <img
                src={images[current]}
                alt={`${title} - ${current + 1}`}
                className='carousel-image'
            />

            {hasMultipleImages && (
                <button className='carousel-btn next' onClick={nextSlide}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            )}

            {hasMultipleImages && (
                <span className='carousel-counter'>
                    {current + 1}/{images.length}
                </span>
            )}
        </div>
    );
};

export default Carousel;
