const initialState = {
    tokken: null//localStorage.getItem('tokken')
}

const Reducer = (state = initialState,action) =>{
    if(action.type === 'TOKKEN'){
        return {
            tokken: action.payLoad
        }
    }
    return state;
}

export default Reducer;