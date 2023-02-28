import React from 'react';

import analyticsEventTracker from '../ga';

import './../styles/Island-crew.css';

const IslandCrew = () => {
    return (
        <div id="island-crew" className="island">
            <div className="join-discord">
                <a
                    href="https://discord.gg/E4jSG2t6wF"
                    onClick={() => analyticsEventTracker('Discord')}
                    className="discord-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    JOIN DISCORD
                </a>
            </div>
        </div>
    );
};

export default IslandCrew;
