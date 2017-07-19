import * as types from '../actions/action-types';

const initialState = {

    droneStrikes: [],
    droneStrikeSpecific: {},
    data: [],
    deathCivilians: [],
    deathChildren: [],
    deathPieData: [],
    slideShowBanner: [
        "assets/images/banner1.jpg",
        "assets/images/banner2.jpg",
        "assets/images/banner3.jpg"
    ],
    errorStatus: false,
    isLoading: true
};


const APIReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.GET_ALL_DRONE_STRIKES:
            return Object.assign({}, state, { droneStrikes: action.strikes });
        case types.GET_SPECIFIC_DRONE_STRIKE:
            return Object.assign({}, state, { droneStrikeSpecific: action.strike });
        case types.SET_DRONE_CHART_DEATHS:
            return Object.assign({}, state, { data: action.deaths });
        case types.SET_DRONE_CHART_DEATHS_CIVILIANS:
            return Object.assign({}, state, { deathCivilians: action.deathCivilians });
        case types.SET_DRONE_CHART_DEATHS_CHILDREN:
            return Object.assign({}, state, { deathChildren: action.deathChildren });
        case types.SET_DRONE_CHART_DEATHS_PIE_DATA:
            return Object.assign({}, state, { deathPieData: action.deathPie });
        case types.GET_LOADING_STATUS:
            return Object.assign({}, state, { isLoading: action.status });
        case types.GET_ERROR_STATUS:
            return Object.assign({}, state, { errorStatus: action.errorStatus });
        default:

    }

    return state;

};

export default APIReducer;