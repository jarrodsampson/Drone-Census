import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import '../../css/DroneStrike.css';
import * as APIService from '../../api/APIService';
import Loader from '../helpers/loader';
import IssueHandler from '../helpers/IssueHandler';
import StrikeItem from '../views/items/StrikeItem';
class DroneStrike extends Component {

    getContent(id) {
        APIService.getDroneStrikeById(id);
    }

    componentDidMount() {
        this.getContent(this.props.match.params.id);
    }

    render() {

        return (
            <div className="">
                <DocumentTitle title={"Strike " + this.props.match.params.id + " - Strike History"} />

                <div className="col s12 pushDown"></div>
                <div className={!this.props.isLoading ? 'hidden' : ''}>
                    <Loader />
                </div>
                <div className={this.props.isLoading ? 'hidden' : ''}>

                            {(() => {
                                if (this.props.errorStatus) {
                                    return <IssueHandler requestItem={this.props.match.params.id} />
                                } else {

                                    return <StrikeItem strike={this.props.droneStrikeSpecific} />
                                }
                            })()}

                </div>

            </div>
        );
    }
}

const mapStateToProps = function(store) {

    //console.log("Store", store.api);
    return {
        droneStrikeSpecific: store.api.droneStrikeSpecific,
        isLoading: store.api.isLoading,
        errorStatus: store.api.errorStatus
    };
};


export default connect(mapStateToProps)(DroneStrike);
