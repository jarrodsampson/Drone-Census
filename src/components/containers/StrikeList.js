import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import '../../css/StrikeList.css';
import * as APIService from '../../api/APIService';
import Loader from '../helpers/loader';
import IssueHandler from '../helpers/IssueHandler';
import StrikeList from '../views/lists/StrikeList';
import { Parallax } from 'react-parallax';
var pages = 0;

class Home extends Component {

    getContent() {
        APIService.getAllDroneStrikes();
    }

    componentDidMount() {
        this.getContent();
    }

    render() {

        return (
            <div className="container-fluid">
                <DocumentTitle title={"Drone Strikes - Drone Strike History"} />

                <div className="col s12 pushDown"></div>
                <div className={!this.props.isLoading ? 'hidden' : ''}>
                    <Loader />
                </div>
                <div className={this.props.isLoading ? 'hidden' : ''}>


                    {(() => {
                        if (this.props.errorStatus) {
                            return <IssueHandler requestItem={this.props.match.params.id} />
                        } else {

                            return <div className="row">

                                <div className="container">
                                    <div className="col s12">
                                        <StrikeList strikes={this.props.droneStrikes} />
                                    </div>

                                </div>
                            </div>

                        }
                    })()}

                </div>

            </div>
        );
    }
}

const mapStateToProps = function(store) {

    console.log("Store", store.api);
    return {
        droneStrikes: store.api.droneStrikes,
        isLoading: store.api.isLoading,
        errorStatus: store.api.errorStatus
    };
};


export default connect(mapStateToProps)(Home);
