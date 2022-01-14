import { ADD_SKILL, REMOVE_SKILL } from "../actions/SkillShop";

const defaultSkill = {
    skill: 30
}

const skill_shop = (state = defaultSkill, action)=>{
    switch (action.type) {
        case ADD_SKILL: {
            return {
                ...state, skill: state.skill + action.payload
            }
        }

        case REMOVE_SKILL: {
            return {
                ...state, skill: state.skill - action.payload
            }
        }
            
            break;
    
        default: return state
           
    }
}


export default skill_shop;