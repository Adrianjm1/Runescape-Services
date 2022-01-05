import React, { useState, useEffect } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import axios from "../../config/axios";
import NavbarP from '../navbarP/navbarP';
import agilityIcon from '../../assets/img/agility.png'

const defaultState = {
    skills: [],
    agility: [], attack: [], construction: [], cooking: [],
    crafting: [], defence: [], farming: [], firemaking: [],
    fishing: [], fletching: [], herblore: [], hitpoints: [],
    hunter: [], magic: [], mining: [], overall: [],
    prayer: [], runecraft: [], smithing: [], strength: [],
    thieving: [], woodcutting: [], slayer: [], ranged: [],
    skillsCard: [], arrayHab: [], arrayNames: [],

};



const Skill = () => {

    

    const [state, setState] = useState(defaultState);

    useEffect(function () {


        axios.get('/skills/andresjvr13')
            .then((res) => {
                if (res) {
                    

                    // let pruebaa = [(res.data.skills.agility)];
                    //  console.log( pruebaa   );

                    // pruebaa.map(dao=>{
                    //     console.log(dao);
                    // })

                    // console.log(res.data.data);

                    

                    let arraySkills = [ res.data.data.attack,  res.data.data.construction, res.data.data.cooking, 
                                        res.data.data.crafting, res.data.data.defence, res.data.data.farming,
                                        res.data.data.firemaking, res.data.data.fishing, res.data.data.fletching,
                                        res.data.data.herblore, res.data.data.hitpoints, res.data.data.hunter,
                                        res.data.data.magic, res.data.data.mining, res.data.data.prayer,
                                        res.data.data.runecraft, res.data.data.smithing, res.data.data.strength,
                                        res.data.data.thieving, res.data.data.woodcutting, res.data.data.slayer,
                                        res.data.data.ranged,
                                      ]

                    let arrayNames = ['attack', 'agility', 'ranged'];




                    setState({ ...state, skills: arraySkills, agility: res.data.data.agility, arrayNames: arrayNames
                                 })
                               
                
                }


                // attack: res.data.data.attack, construction: res.data.data.construction,
                // cooking: res.data.data.cooking,
                // crafting: res.data.data.crafting, defence: res.data.data.defence,
                //  farming: res.data.data.farming, firemaking: res.data.data.firemaking,
                // fishing: res.data.data.fishing, 
                //  herblore: res.data.data.herblore, hitpoints: res.data.data.hitpoints,
                // hunter: res.data.data.hunter, magic: res.data.data.magic,
                //  mining: res.data.data.mining, overall: res.data.data.overall,
                // prayer: res.data.data.prayer, runecraft: res.data.data.runecraft,
                //  smithing: res.data.data.smithing, strength: res.data.data.strength,
                // thieving: res.data.data.thieving, woodcutting: res.data.data.woodcutting,
                //  slayer: res.data.data.slayer, 
                //  fletching: res.data.data.fletching, ranged: res.data.data.ranged,



            })
            .catch((error) => console.log(error))

 

        

            // for (let i = 0; i < (state.data.skills).length; i++) {
            //     const element = state.data.skills[i];

            //     console.log(element);
                
            // }

        //eslint-disable-next-line
    }, [])

    return (
        <>
            <NavbarP />


            {/* <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card> */}

            {state.skills.map( (datos) =>{

              
                return (
                    <Card style={{ width: '10rem', height: '15rem' }}>

                    <Card.Body>
                        <Card.Title className='text-center'>Agility</Card.Title>
                        <Card.Text className='text-center card-skill'>
                            ({datos.level})
                        </Card.Text>
                        <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                    </Card.Body>
                </Card>
                  )
            })

            }



            {/* <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card>

            <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card>

            <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '15rem' }}>

                <Card.Body>
                    <Card.Title className='text-center'>Agility</Card.Title>
                    <Card.Text className='text-center card-skill'>
                        ({state.agility.level})
                    </Card.Text>
                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={agilityIcon} />
                </Card.Body>
            </Card> */}






        </>
    )
}

export default Skill
