import React from 'react';

import Perfil from './Perfil';

import personal from '../../data/team';

const TeamDesktop = () => {
    return (
        <div className="team-body">
            <h1 className="team-title">TEAM</h1>
            <div className="team-personal">
                <ul className="personal-list">
                    {personal
                        .filter(person => person.id <= 4)
                        .map(person => {
                            return (
                                <Perfil
                                    key={person.id}
                                    img={person.img}
                                    name={person.name}
                                    role={person.role}
                                    description={person.description}
                                    display="Desktop"
                                />
                            );
                        })}
                </ul>
                <ul className="personal-list">
                    {personal
                        .filter(person => person.id >= 5)
                        .map(person => {
                            return (
                                <Perfil
                                    key={person.id}
                                    img={person.img}
                                    name={person.name}
                                    role={person.role}
                                    description={person.description}
                                    display="Desktop"
                                />
                            );
                        })}
                </ul>
            </div>
        </div>
    );
};

export default TeamDesktop;
