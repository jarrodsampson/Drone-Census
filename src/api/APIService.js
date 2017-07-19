import store from '../Store';
import * as APIFunction from '../actions/API-data';
import _ from 'underscore';

var server = "https://api.dronestre.am/";


export function getAllDroneStrikes() {

    store.dispatch(APIFunction.setErrorStatus(false));
    store.dispatch(APIFunction.setLoadingStatus(true));

    return fetch(server + "data")
        .then(response => response.json())
        .then(json => {
            console.log("All Drone Strike Data", json);

            if (json.status === "OK") {
                store.dispatch(APIFunction.getAllDroneStrikesSuccess(_.sortBy(json.strike, function(item){ return item.date;}).reverse()));
                store.dispatch(APIFunction.setLoadingStatus(false));
            } else {
                store.dispatch(APIFunction.setErrorStatus(true));
                store.dispatch(APIFunction.setLoadingStatus(false));
            }
            return json;
        })
        .catch((err) => console.log(''));
}

export function getDroneStrikeById(id) {
    let strike;

    store.dispatch(APIFunction.setErrorStatus(false));
    store.dispatch(APIFunction.setLoadingStatus(true));

    return fetch(server + "data")
        .then(response => response.json())
        .then(json => {

            strike = _.findWhere(json.strike, {number: parseInt(id, 10)});
            console.log("Strike ID Data", strike);

            if (strike !== undefined) {
                store.dispatch(APIFunction.getSpecificDroneStrikeSuccess(strike));
                store.dispatch(APIFunction.setLoadingStatus(false));
            } else {
                store.dispatch(APIFunction.setErrorStatus(true));
                store.dispatch(APIFunction.setLoadingStatus(false));
            }


            return json;
        })
        .catch((err) => console.log(''));
}

export function getDroneStrikeByDeaths(number) {

    let strikes;

    store.dispatch(APIFunction.setErrorStatus(false));
    store.dispatch(APIFunction.setLoadingStatus(true));

    return fetch(server + "data")
        .then(response => response.json())
        .then(json => {

            strikes = _.sortBy(json.strike, function(item){ return item.deaths;});
            console.log("Strikes by Death Data", strikes);


            return json;
        })
        .catch((err) => console.log(''));

}

export function getDroneChartDeathData() {

    let strikes;
    let lineData = [];
    let pieData = [];
    let chartData = [];
    let tempObj = {};

    store.dispatch(APIFunction.setErrorStatus(false));
    store.dispatch(APIFunction.setLoadingStatus(true));

    return fetch(server + "data")
        .then(response => response.json())
        .then(json => {

            strikes = _.sortBy(json.strike, function(item){ return item.date;});
            console.log("Strikes by Death Data", strikes);

            for (let i = 0; i < strikes.length; i++) {
                tempObj = {
                    x: parseInt(strikes[i].number, 10),
                    y: parseInt(strikes[i].deaths_max, 10)
                };
                chartData.push(tempObj);
            }

            lineData.push({
                name: '',
                values: chartData,
                strokeWidth: 1,
            });

            store.dispatch(APIFunction.setDroneChartDeaths(lineData));

            lineData = [];
            chartData = [];

            for (let i = 0; i < strikes.length; i++) {
                tempObj = {
                    x: parseInt(strikes[i].number, 10),
                    y: parseInt(strikes[i].civilians || 0, 10)
                };
                chartData.push(tempObj);
            }

            lineData.push({
                name: '',
                values: chartData,
                strokeWidth: 1,
            });

            store.dispatch(APIFunction.setDroneChartDeathsCivilians(lineData));

            lineData = [];
            chartData = [];

            for (let i = 0; i < strikes.length; i++) {
                tempObj = {
                    x: parseInt(strikes[i].number, 10),
                    y: parseInt(strikes[i].children || 0, 10)
                };
                chartData.push(tempObj);
            }

            lineData.push({
                name: '',
                values: chartData,
                strokeWidth: 1,
            });

            store.dispatch(APIFunction.setDroneChartDeathsChildren(lineData));

            let childrenNumber = 0;
            let civilianNumber = 0;

            for (let i = 0; i < strikes.length; i++) {
                if (strikes[i].children !== "") {
                    childrenNumber += 1;
                } else if (strikes[i].civilians !== "") {
                    civilianNumber += 1;
                }
            }

            pieData = [
                {label: "Children", value: childrenNumber},
                {label: "Civilians", value: civilianNumber},
            ];

            store.dispatch(APIFunction.setDroneChartDeathsPie(pieData));


            store.dispatch(APIFunction.setLoadingStatus(false));


            return json;
        })
        .catch((err) => console.log(''));

}

export function goBack() {
    window.history.back();
}
