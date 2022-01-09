import React, { useState, useEffect } from 'react';
import { Card, Button, Container, InputGroup, FormControl, Row, Col, Form } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import axios from "../../config/axios";
import NavbarP from '../navbarP/navbarP';
import './skillcalculator.css';



const countState = {
    lvl: 0,

}



const defaultState = {
    skillTarget: 0

}

const Skillcalculator = (skillSelected) => {

    const [state, setState] = useState(defaultState)
    const [countCurrent, setCountCurrent] = useState(0);
    const [countTarget, setCountTarget] = useState(0);

    let image;

    const skillSelectede = skillSelected.skillSelected;
    console.log(skillSelectede);

    if (skillSelected.skillSelected != ''){

     image = require(`../../assets/img/${skillSelectede}.png`)

    }


    const validationMinus = (counter) => {



        if (counter <= 0) {

            setCountCurrent(0);
        } else {
            setCountCurrent(countCurrent - 1);
            document.getElementById("current-skill").value = parseInt(counter) - 1
        }

    }



    const plus = (counter)=>{

        if (counter >= 100) {

            setCountCurrent(100);
        } else {
            setCountCurrent(countCurrent + 1);
            document.getElementById("current-skill").value = parseInt(counter) + 1
        }

    }

    const validationMinus2 = (counter) => {
        if (counter <= 0) {
            setCountTarget(0);
        } else {
            setCountTarget(countTarget - 1);
            document.getElementById("current-target").value = parseInt(counter) - 1
        }
    }


    const plus2 = (counter)=>{
        if (counter >= 100) {
            setCountTarget(100);
        } else {
            setCountTarget(countTarget + 1);
            document.getElementById("current-target").value = parseInt(counter) + 1
        }

    }



    const onInputChange = e => {

        // document.getElementById("skillTarget").value =countTarget + parseInt(e.target.value) ;  
        const isValid = e.target.validity.valid;

        if(e.target.value>=100 ){
            e.target.value = 99
        }
        else if (e.target.value <=0) {
            e.target.value = 1
        } else {
                console.log(isValid); 
        }
        if (isValid === true) {
            setCountCurrent(parseInt(e.target.value))
            document.getElementById("current-skill").value = parseInt(e.target.value)

            // setState({ ...state, [e.target.name]: e.target.value });
        }
    }



    const onInputChange2 = e => {

        // document.getElementById("skillTarget").value =countTarget + parseInt(e.target.value) ;  
        const isValid = e.target.validity.valid;

        if(e.target.value>=100 ){
            e.target.value = 99
        }
        else if (e.target.value <=0) {
            e.target.value = 1
        } else {
                console.log(isValid); 
        }
        if (isValid === true) {
            setCountTarget(parseInt(e.target.value))
            document.getElementById("current-target").value = parseInt(e.target.value)

            // setState({ ...state, [e.target.name]: e.target.value });
        }
    }

    const putSkill = ()=>{

        let element = <img src={image} id='putskill' />
        
        ReactDOM.render(element, document.getElementById('putskill'));
        // document.getElementById("putskill").value = skillSelectede;

    }







    return (


        <div className="level">

            <img src=''/>
           <button onClick={putSkill}>invitame</button>
            <div id='putskill'>si</div>
     

            <Row>
                <Col sm>

                    <p className='title-skill'>Current Level</p>

                    <Form.Control id='current-skill' defaultValue={countCurrent} onChange={onInputChange} name='skillCurrent' className={countCurrent > 0 ? "positive" : countCurrent < 0 ? "negative" : null} type="number" />


                    <div className="button__wrapper">
                        <button onClick={() => validationMinus(countCurrent)}>-</button>
                        <button onClick={() => plus(countCurrent)}>+</button>
                    </div>


                </Col>
                <Col sm>
                    <p className='title-skill'>Level Target</p>
                    <Form.Control id='current-target' defaultValue={countTarget} onChange={onInputChange2} name='skillTarget' className={countTarget > 0 ? "positive" : null} type="number" />
                    <div className="button__wrapper">
                        <button onClick={() => validationMinus2(countTarget)}>-</button>
                        <button onClick={() => plus2(countTarget)}>+</button>
                    </div>

                </Col>
            </Row>

            <Row className='price-xp'>
                <Col sm>
                <p className='xpSkill'>Total XP     <br/>  <span> 10 </span> </p>
                </Col>
                <Col sm>
                <p className='priceSkill'>Total Price    <br/>  <span> 10 </span> </p>
                </Col>
            </Row>

     
                <div className='btnAdd' >
                    <span className='btnAddSpan'><a href="#"></a></span>
                </div>




        </div>

    );

}

export default Skillcalculator
