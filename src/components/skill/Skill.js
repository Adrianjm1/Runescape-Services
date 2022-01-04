import React, { useState, useEffect } from 'react';
import axios from "../../config/axios";

const defaultState = {
    skills : [],
    prueba: ['hola', 'como', 'estas']
};


const Skill = () => {

    const [state, setState] = useState(defaultState);

    useEffect(function () {


        axios.get('/skills/andresjvr13')
            .then((res) => {
            // console.log(res.data.skills);

            setState({...state, skills: res.data.skills})

            })
            .catch((error) => console.log(error))


        //eslint-disable-next-line
    }, [])

    return (
        <>
        {console.log(state.skills)}
            
            <p> {state.skills.agility.level}</p>






        </>
    )
}

export default Skill
