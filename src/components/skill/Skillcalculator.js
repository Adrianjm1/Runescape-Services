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
    skillTarget: 0,
    seleccionada: 'standar',
    lvl: 10,
    xp: 1

}

const Skillcalculator = (skillSelected) => {

    const [state, setState] = useState(defaultState)
    const [countCurrent, setCountCurrent] = useState(0);
    const [countTarget, setCountTarget] = useState();

    if (skillSelected.skillSelected.skill == '') {
        skillSelected.skillSelected.skill = 'standar'
    }


    let skillLVL = 0;
    let skillXP = 0;


    useEffect(function () {




        let image;
        let xp;
        let lvl;


        const skillSelectede = skillSelected.skillSelected.skill[0];
        // console.log(skillSelected.skillSelected.skill[1].xp);



        if (skillSelectede != '' && skillSelectede != undefined && skillSelectede != 's') {

            image = require(`../../assets/img/${skillSelectede}.png`)
            xp = skillSelected.skillSelected.skill[1].xp
            lvl = skillSelected.skillSelected.skill[1].level

        }


        let elementXP = <span id='putXP'> {xp}</span>
        let elementLVL = <span id='putXP'> {lvl}</span>

        let element = <img className='mx-auto d-block' src={image} id='putskill' />

        if (lvl != undefined) {

            setState({ ...state, lvl: lvl, xp: xp });
            setCountCurrent(parseInt(lvl));
            setCountTarget(parseInt(lvl) + 1);
            document.getElementById("current-skill").value = parseInt(lvl)
            document.getElementById("current-target").value = parseInt(lvl) + 1
        }

        ReactDOM.render(element, document.getElementById('putskill'));

        // axios.get('/seller/')
        // .then((res) => {

        //     axios.get('/bill/')
        //         .then((resp) => {

        //                 setState({
        //                     ...state,
        //                     sellers: res.data,
        //                     bills: resp.data,
        //                 })

        //         })
        //         .catch((error) => console.log(error))


        // })
        // .catch((error) => console.log(error))




    }, [skillSelected])

    const validationMinus = (counter) => {



        if (counter <= 0) {

            setCountCurrent(0);
        } else {
            setCountCurrent(countCurrent - 1);
            document.getElementById("current-skill").value = parseInt(counter) - 1
        }

    }



    const plus = (counter) => {

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


    const plus2 = (counter) => {
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

        if (e.target.value >= 100) {
            e.target.value = 99
        }
        else if (e.target.value <= 0) {
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

        if (e.target.value >= 100) {
            e.target.value = 99
        }
        else if (e.target.value <= 0) {
            e.target.value = 1
        } else {
            console.log(isValid);
        }
        if (isValid === true) {
            setCountTarget(parseInt(e.target.value))
            document.getElementById("current-target").value = parseInt(e.target.value)

        }
    }







    return (


        <div className="level">

            <img src='' />

            <div id='putskill'>si</div>


            <Row>
                <Col sm>

                    <p className='title-skill'>Current Level</p>

                    <Form.Control id='current-skill' defaultValue={countCurrent} onChange={onInputChange} name='skillCurrent' className={countCurrent > 0 ? "positive" : null} type="number" />


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
                    <p className='xpSkill'>Total XP     <br />  <span id='putXP'> {parseFloat(state.xp)}</span> </p>
                </Col>
                <Col sm>
                    <p className='priceSkill'>Total Price    <br />  <span id='putLVL' > {state.lvl} </span> </p>
                </Col>
            </Row>


            <div className='btnAdd' >
                <span className='btnAddSpan'><a href="#"></a></span>
            </div>




        </div>

    );

}

export default Skillcalculator
