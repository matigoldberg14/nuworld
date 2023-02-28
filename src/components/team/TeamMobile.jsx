import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import Perfil from './Perfil';

import personal from '../../data/team';

const TeamMobile = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="team-body">
            <h1 className="team-title">TEAM</h1>
            <div className="team-personal">
                <IoIosArrowBack
                    color="white"
                    onClick={() =>
                        index === 0 ? setIndex(personal.length - 1) : setIndex(index - 1)
                    }
                />
                <Perfil
                    key={personal[index].id}
                    img={personal[index].img}
                    name={personal[index].name}
                    role={personal[index].role}
                    description={personal[index].description}
                    display="Mobile"
                />
                <IoIosArrowForward
                    color="white"
                    onClick={() =>
                        index === personal.length - 1 ? setIndex(0) : setIndex(index + 1)
                    }
                />
            </div>
        </div>
    );
};

export default TeamMobile;
