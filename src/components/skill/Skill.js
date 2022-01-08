import React, { useState, useEffect } from 'react';
import { Card, Button, Container, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import axios from "../../config/axios";
import NavbarP from '../navbarP/navbarP';
import './skill.css'
import Skillcalculator from './Skillcalculator';

const defaultState = {
    skills: [],
    rsn: '-',
    enterRsn: 0

};



const Skill = () => {



    const [state, setState] = useState(defaultState);

    useEffect(function () {



        axios.get(`/skills/${state.rsn}`)
            .then((res) => {
                if (res) {




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
        let vali = aux + 1;
        console.log(vali);

        setState({ ...state, enterRsn: vali })



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
            <Button className='primary' onClick={onEnterRsn}> Buscar </Button>


            <div className='cards-skill mx-auto'>

                {state.skills.map((datos) => {

                    if (datos[0] == 'overall') {

                    } else {

                        let image = require(`../../assets/img/${datos[0]}.png`)
                        return (

                            <div key={datos[1].rank} className='divFa'>
                                <div className='lacard mr-40 '>
                                    <div className='infoskills'>
                                        <div className='divImgCard'>       <img className='imgcard' src={image} />             </div>
                                        <div>       <a className='textocarta'> {UpperCase(datos[0])}   ({datos[1].level}) </a>        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
                }

            </div>


            <Skillcalculator/>


        </>
    )
}

export default Skill
