import React from 'react';
import VimeoPlayer from 'react-player/vimeo';

const PlayerMobile = () => {
    return (
        <VimeoPlayer
            url="https://vimeo.com/718044664"
            width="100%"
            height="100%"
            loop
            playing
            muted
            playsinline
        />
    );
};

export default PlayerMobile;
