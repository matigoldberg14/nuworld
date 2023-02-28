import React, { useState, useEffect } from 'react';

import TeamDesktop from './TeamDesktop';
import TeamMobile from './TeamMobile';

import './../../styles/Team.css';

const Team = () => {
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
        <div id="team" className="team">
            {width <= 768 ? <TeamMobile /> : <TeamDesktop />}
        </div>
    );
};

export default Team;
