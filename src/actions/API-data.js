import * as types from './action-types';

export function getAllDroneStrikesSuccess(strikes) {
    return {
        type: types.GET_ALL_DRONE_STRIKES,
        strikes
    };
}

export function getSpecificDroneStrikeSuccess(strike) {
    return {
        type: types.GET_SPECIFIC_DRONE_STRIKE,
        strike
    };
}

export function setDroneChartDeaths(deaths) {
    return {
        type: types.SET_DRONE_CHART_DEATHS,
        deaths
    };
}

export function setDroneChartDeathsCivilians(deathCivilians) {
    return {
        type: types.SET_DRONE_CHART_DEATHS_CIVILIANS,
        deathCivilians
    };
}

export function setDroneChartDeathsChildren(deathChildren) {
    return {
        type: types.SET_DRONE_CHART_DEATHS_CHILDREN,
        deathChildren
    };
}

export function setDroneChartDeathsPie(deathPie) {
    return {
        type: types.SET_DRONE_CHART_DEATHS_PIE_DATA,
        deathPie
    };
}

export function setLoadingStatus(status) {
    return {
        type: types.GET_LOADING_STATUS,
        status
    };
}

export function setErrorStatus(errorStatus) {
    return {
        type: types.GET_ERROR_STATUS,
        errorStatus
    };
}