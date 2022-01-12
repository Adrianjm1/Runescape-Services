export const ADD_SKILL = 'ADD_SKILL';
export const REMOVE_SKILL = 'REMOVE_SKILL';


export const add_skill=(can)=>{

    return {
        type:ADD_SKILL,
        payload: can
    }
}



export const remove=(can)=>{

    return {
        type:REMOVE_SKILL,
        payload: can
    }
}