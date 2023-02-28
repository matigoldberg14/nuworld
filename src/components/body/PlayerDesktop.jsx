import React from 'react';
import VimeoPlayer from 'react-player/vimeo';

const PlayerDesktop = () => {
    return (
        <VimeoPlayer
            url="https://vimeo.com/718039735"
            width="100%"
            height="100%"
            loop
            playing
            muted
            playsinline
        />
    );
};

export default PlayerDesktop;
