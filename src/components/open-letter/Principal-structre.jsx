import React from 'react';

import Icon from '../generics/Icons-list';
import Nekevah from './../../assets/Nekevha con Triangulo Optimizada.png';

import IconJson from '../../data/icons.json';

import analyticsEventTracker from '../../ga';

import './../../styles/open-letter/Principal-structre.css';

const PrincipalStructre = () => {
    const openLetter = IconJson.openLetter;
    return (
        <div className="structre-description">
            <div className="nekevah">
                <img
                    width="100%"
                    height="100%"
                    className="structre-img"
                    src={Nekevah}
                    alt="Nekevah"
                />
                <div className="nekevah-icons">
                    {openLetter.map(i => {
                        return (
                            <a
                                key={i.id}
                                className="icon-link-ps"
                                href={i.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => analyticsEventTracker(i.icon)}
                            >
                                <Icon key={i.id} icon={i.icon} />
                            </a>
                        );
                    })}
                </div>
            </div>
            <div className="structre-general">
                <div className="structre-title">
                    <div className="structre-title-subs">
                        <p className="text">October, 24 2178</p>
                        <p className="text">
                            CAPTAIN NEKEVAH | Commander of the Exhodous Ship | NU WORLD ORG
                        </p>
                    </div>
                </div>
                <div className="structre-subtitle">
                    <p className="bold">Mr. Resident and Earthlings of Planet Earth:</p>
                    <div className="text-structre">
                        <p className="margin-o">
                            As of now, you should all be aware of the news that have been circling
                            around the globe, and sadly, they’re true.
                        </p>
                        <p className="margin-o">
                            The only and last chance we have to save humanity is NU WORLD.
                        </p>
                        <p className="margin-o">
                            Although the media and government on earth are denying these claims, we
                            are not stopping our mission.
                        </p>
                    </div>
                    <div className="text-structre text-modify">
                        <p className="text margin-o">
                            Our purpose is to save humanity by leaving the evils of the world
                            behind.
                        </p>
                        <br />
                        <p className="margin-o">
                            The Exhodous ship has a limited capacity. Given the importance of this
                            mission, the recruits will have to surpass the greatest tests on Values,
                            Commitment & Belief that we can make build a NU and better WORLD.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrincipalStructre;
