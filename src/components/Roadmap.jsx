import React, { useState } from 'react';
import { useEffect } from 'react';

import './../styles/Roadmap.css';

const Roadmap = () => {
    const [url, setUrl] = useState();

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    });

    const updateDimensions = () => {
        const width = window.innerWidth;
        if (width <= 768) {
            setUrl(
                'https://player.vimeo.com/video/720308373?h=b70a6d5eb5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1'
            );
        } else {
            setUrl(
                'https://player.vimeo.com/video/719122381?h=6225b98fa5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1'
            );
        }
    };

    return (
        <div id="teaser" className="teaser">
            <h1 className="teaser-title">TEASER</h1>
            <div className="roadmap">
                <iframe
                    className="roadmap-video"
                    src={url}
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                    title="RoadMap NuWorld"
                ></iframe>
            </div>
        </div>
    );
};

export default Roadmap;
