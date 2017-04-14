const types ={
    welcomeScreen:'WelcomeScreen',
    analysisScreen:'AnalysisScreen',
    dictionaryScreen:'DictionaryScreen'
}

export const reducer = (state = {}, action) => {
    switch(action.type){
        case 'WelcomeScreen':
        return {
            ...state,
            params: action.payload
        }
        break;
        case 'AnalysisScreen':
        return {
            ...state,
            params: action.payload
        }
        break;
        case 'DictionaryScreen':
        return {
            ...state,
            params: action.payload
        }
        break;
        default:
    }
    return state;
}

export const actionCreators = {
    storeDataFromApi(params){
        return {
            type:types.analysisScreen,
            payload: params
        }
    },
    storeLastSearch(params){
        return {
            type:types.dictionaryScreen,
            payload: params
        }
    }
}