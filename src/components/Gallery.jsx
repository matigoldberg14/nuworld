import React, { useEffect, useState } from 'react';
import nft from '../data/nft';
import Carousel from 'react-elastic-carousel';

import './../styles/Gallery.css';

const Gallery = () => {
    const [width, setWindowWidth] = useState(0);

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };
    return (
        <div className="gallery">
            <h1 className="gallery-title">Gallery</h1>
            <p className="meet-the-population">Coming soon...</p>
            <Carousel
                enableSwipe={true}
                enableMouseSwipe={true}
                itemsToShow={width <= 768 ? 1 : 3}
                itemsToScroll={width <= 768 ? 1 : 3}
            >
                {nft.map(i => (
                    <img className="image-carrousel" src={i.image} alt={i.id} key={i.id} />
                ))}
            </Carousel>
        </div>
    );
};

export default Gallery;
