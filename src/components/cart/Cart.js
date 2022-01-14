import React from 'react';
import store from '../../redux/store';
import { useDispatch } from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch()




    return (
        <div>
            <button onClick={()=>dispatch({type:`add_skill`}) }> No se rey</button>
        </div>
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

