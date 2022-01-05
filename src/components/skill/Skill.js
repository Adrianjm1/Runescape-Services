import React, { useState, useEffect } from 'react';
import { Card, Button, Container, InputGroup, FormControl } from 'react-bootstrap';
import axios from "../../config/axios";
import NavbarP from '../navbarP/navbarP';
import './skill.css'


const defaultState = {
    skills: [],
    rsn: '',
    enterRsn: 0

};



const Skill = () => {



    const [state, setState] = useState(defaultState);

    useEffect(function () {


        axios.get(`/skills/${state.rsn}`)
            .then((res) => {
                if (res) {




                    console.log(res.data);


                    let arrayNames = ['attack', 'agility', 'ranged'];




                    setState({
                        ...state, skills: res.data.result,
                    })


                }




            })
            .catch((error) => console.log(error))




    }, [state.enterRsn])  //state.rsn

    const onInputChange = e => {

        const isValid = e.target.validity.valid;


        if (isValid === true) {
            setState({ ...state, [e.target.name]: e.target.value });

        } else {
            console.log(isValid);

        }

    }

    const onEnterRsn = () => {

            let aux = state.enterRsn;
            let vali = aux +1;
            console.log(vali);

            setState({ ...state, enterRsn:vali })



    }

    const UpperCase = (cadena) => {
        const str = cadena;
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
        return str2;

    }

    return (
        <>
            <NavbarP />

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="rsn" 
                    onChange={onInputChange}
                />
            </InputGroup>
            <Button className='primary' onClick={onEnterRsn}> Hola </Button>

            <div className='cards-skill'>

                {state.skills.map((datos) => {

                    if (datos[0] == 'overall') {
                        
                    } else {

                        let image = require(`../../assets/img/${datos[0]}.png`)
                        return (
                            <Card className='card-skill' key={datos[0]} style={{ width: '10rem', height: '15rem' }}>

                                <Card.Body>
                                    <Card.Title className='text-center'>{UpperCase(datos[0])}</Card.Title>
                                    <Card.Text className='text-center card-skill'>
                                        ({datos[1].level})
                                    </Card.Text>
                                    <Card.Img className='img-thumbnail' style={{ height: '50%' }} variant="bottom" src={image} />
                                </Card.Body>
                            </Card>
                        )
                    }
                })
                }

            </div>


        </>
    )
}

export default Skill
