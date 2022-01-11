import React, { useState, useEffect } from 'react';
import { Card, Button, Container, InputGroup, FormControl, Row, Col, Table } from 'react-bootstrap';
import axios from "../../config/axios";
import NavbarP from '../navbarP/navbarP';




const defaultState = {


    quest: [],
}





const Quest = () => {



    const [skilldata, setSkilldata] = useState(0);

    const [state, setState] = useState(defaultState);

    useEffect(function () {



        axios.get(`/skills/quest`)
            .then((res) => {
                if (res) {


                    console.log(res.data[0].name);
                    setState({
                        ...state, quest: res.data,
                    })


                }

            })
            .catch((error) => console.log(error))







    }, [])  //state.rsn

    return (
        <div>
            <div className='mx-auto'>

                {state.quest.map((datos) => (

                    <div className='q=s'>

                        <Table striped bordered hover size="sm">
                            <thead>

                                <tr className='first'>
                                    <th>Name</th>
                                    <th>difficulty</th>
                                    <th>Price</th>
                                    <th>Order</th>

                                </tr>
                            </thead>


                            <tbody>
                                {
                                    state.quest.map(data => (
                                        <tr >
                                            <td>{data.name}</td>
                                            <td>{data.difficulty}</td>
                                            <td>FREE</td>
                                            <td><Button variant="primary"> Add to cart</Button></td>

                                        </tr>
                                    ))
                                }
                            </tbody>

                        </Table>



                    </div>






                ))
                }

            </div>



        </div>
    )
}

export default Quest
