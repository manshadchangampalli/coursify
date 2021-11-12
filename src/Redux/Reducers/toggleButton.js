

const isToggleButtonClickedReducer = (state = false, action)=>{
    switch(action.type){
        case "CLICKED":
            return state=!state;
        
        default:
            return state;

    }
}

export default isToggleButtonClickedReducer;