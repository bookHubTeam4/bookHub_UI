const initialState = {
    tokken: localStorage.getItem('tokken'),
    name: localStorage.getItem('name')
}

const Reducer = (state = initialState,action) =>{
    if(action.type === 'TOKKEN'){
        return {
            tokken: action.payLoad
        }
    }
    if(action.type === 'NAME'){
        return {
            name: action.payLoad
        }
    }
    return state;
}

export default Reducer;