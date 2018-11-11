const initialState = {
    tokken: localStorage.getItem('tokken'),
    name: localStorage.getItem('name')
}

const Reducer = (state = initialState,action) =>{
    if(action.type === 'TOKKEN'){
        let obj = Object.assign(state) 
        return {
            ...obj,
            tokken: action.payLoad
        }
    }
    if(action.type === 'NAME'){
        let obj = Object.assign(state) 
        return {
            ...obj,
            name: action.payLoad
        }
    }
    return state;
}

export default Reducer;