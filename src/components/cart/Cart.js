import React from 'react';

import {connect, useSelector} from 'react-redux';
import store from '../../redux/store'
import { useDispatch } from "react-redux";
import { remove, add_skill } from '../../redux/actions/SkillShop';


const Cart = () => {
    const dispatch = useDispatch()




    return (
        <>
        
            <p>CART</p>

            <div className='cart-skill'>


        <ul>
            <li>SKILL </li>
            <li>Description</li>
            <li>Price</li>
            <li>X</li>

        </ul>

        <div>Total items:  </div>
        <div>Total price:  </div>

            </div>


         {/* <div>
             <button onClick={()=>dispatch({type:`add_skill`}) }> No se rey</button>
         </div> */}
        </>
    )
}

const mapDispatch = {
    add_skill,
    remove
}

const mapStateToProps = (state)=>{

    return {
        skill_shop: state.game_shop
    }

}

export default  connect(mapStateToProps, mapDispatch)(Cart);

