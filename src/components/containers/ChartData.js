import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import '../../css/ChartData.css';
import * as APIService from '../../api/APIService';
import Loader from '../helpers/loader';
import rd3 from 'rd3';
class ChartData extends Component {

    getContent() {
        APIService.getDroneChartDeathData();
    }

    componentDidMount() {
        this.getContent();
    }

    render() {

        return (
            <div className="container">
                <DocumentTitle title={"Hard Facts - Strike History"} />

                <div className="col s12 pushDown"></div>
                <div className={!this.props.isLoading ? 'hidden' : ''}>
                    <Loader />
                </div>
                <div className={this.props.isLoading ? 'hidden' : ''}>

                    <div className="row">
                        <div className="col s12 chart-height">
                            <rd3.ScatterChart
                                legend={true}
                                data={this.props.data}
                                width='100%'
                                viewBoxObject={{
                                    x: 0,
                                    y: 0,
                                    width: 500,
                                    height: 400
                                }}
                                title="Drone Deaths by Strike Number Total"
                                yAxisLabel="Deaths"
                                xAxisLabel="Strike Number"
                                domain={{x: [0,650], y: [0,90]}}
                                gridHorizontal={true}
                            />
                        </div>

                        <div className="col s12 chart-height">
                            <rd3.ScatterChart
                                legend={true}
                                data={this.props.deathCivilians}
                                width='100%'
                                viewBoxObject={{
                                    x: 0,
                                    y: 0,
                                    width: 500,
                                    height: 400
                                }}
                                title="Civilians Killed by Drone Strike"
                                yAxisLabel="Deaths"
                                xAxisLabel="Strike Number"
                                domain={{x: [0,650], y: [0,90]}}
                                gridHorizontal={true}
                            />
                        </div>

                        <div className="col s12 chart-height">
                            <rd3.ScatterChart
                                legend={true}
                                data={this.props.deathChildren}
                                width='100%'
                                viewBoxObject={{
                                    x: 0,
                                    y: 0,
                                    width: 500,
                                    height: 400
                                }}
                                title="Children Killed by Drone Strike"
                                yAxisLabel="Deaths"
                                xAxisLabel="Strike Number"
                                domain={{x: [0,650], y: [0,70]}}
                                gridHorizontal={true}
                            />
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = function(store) {

    //console.log("Store", store.api);
    return {
        isLoading: store.api.isLoading,
        errorStatus: store.api.errorStatus,
        data: store.api.data,
        deathCivilians: store.api.deathCivilians,
        deathChildren: store.api.deathChildren,
        deathPieData: store.api.deathPieData
    };
};


export default connect(mapStateToProps)(ChartData);
