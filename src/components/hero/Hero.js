import React from 'react';
import { Button } from 'react-bootstrap';
import './hero.css';

const Hero = () => {
    return (
        <>
            <div className='containerHero'>
                <div class="hero-image">
                    <div class="hero-text">
                        <br/><br/><br/>
                        <h1>Runescape services</h1>
                        <br/><br/>
                        <p>OSRS SKILLING, QUESTING, MINIGAMES AND MORE!</p>
                        <div  className='btnGrouphero'>



                            <Button className='btnHero' variant="primary">POWERLEVELING</Button>{' '}
                            <Button className='btnHero' variant="secondary">QUESTING</Button>{' '}
                            <Button className='btnHero' variant="success">MINIGAMES</Button>{' '}
                        
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
