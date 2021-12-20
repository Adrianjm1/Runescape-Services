import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import './cards.css'

const Cards = () => {
    return (
        <>

        <div className='cardFather'>


            <div className='cardsHero'>
                <h1> OSRS SERVICES</h1>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">OSRS SKILLING</h5>
                                <p class="card-text">07services does Hand-Done OSRS skilling with no bots that can be purchased via our OSRS skilling calculator.</p>
                                <a href="#" class="btn btn-primary">BUY NOW</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">OSRS QUESTING</h5>
                                <p class="card-text">We offer every OSRS quest in the game that are hand-done and cheap aswell. We also offer optimal osrs quest guides over on our blog.</p>
                                <a href="#" class="btn btn-primary">BUY NOW</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">OSRS MINIGAMES</h5>
                                <p class="card-text">We offer many OSRS minigame services. Whether its Elite void osrs, osrs void armor, big chompy bird hunting on OSRS, BA services osrs and more ; 07services has you covered!</p>
                                <a href="#" class="btn btn-primary">BUY NOW</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">OSRS HIGHSCORES</h5>
                                <p class="card-text">Our OSRS skilling calculator automatically prefills your OSRS levels for your convenience by utilizing the OSRS Highscores.</p>
                                <a href="#" class="btn btn-primary">BUY NOW</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

            <div className='aboutUs'>
                <br/> <br/> <br/>


                <div className='contentAbout'> 


                <h1>About us</h1> 
                <h2>________</h2>
                <p> 07services was founded by the owners of Rs3services.com and Mmopurchase.com who envisioned a corporation that could provide OSRS players with a single point of contact for all their OSRS needs whether that be OSRS skilling, OSRS questing, OSRS minigames, OSRS accounts, OSRS gold and more – Thus our logo of ” Where accounts come to Life”. We are no longer affiliated with Rsgoldrush in any form.</p>

                </div>


            </div>
        </>
    )
}

export default Cards
