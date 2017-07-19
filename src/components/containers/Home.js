import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import '../../css/Home.css';
import * as APIService from '../../api/APIService';
import Loader from '../helpers/loader';
import IssueHandler from '../helpers/IssueHandler';
import StrikeList from '../views/lists/StrikeList';
import CarouselHomeSlides from '../views/items/CarouselHomeSlides';
import { Parallax } from 'react-parallax';

var tempParallax;

class Home extends Component {

    getContent() {
        APIService.getAllDroneStrikes();
    }

    componentDidMount() {

        tempParallax = this.props.slideShowBanner[Math.floor(Math.random()*this.props.slideShowBanner.length)];

        this.getContent();

    }

    render() {

        return (
            <div className="container-fluid">
                <DocumentTitle title={"Drone Census - Drone Strike History"} />

                <div className="slideshowBanner relative">
                    <CarouselHomeSlides list={this.props.slideShowBanner} />
                </div>

                <div className="col s12 pushDown"></div>

                <div className="col s12">
                    <Parallax className="" bgImage="assets/images/banner1.jpg" strength={400} />
                </div>

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
                                                <h1>Recent Strikes</h1>
                                                <StrikeList strikes={this.props.droneStrikes.filter(function(item, i){ return i < 3; })} />
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
        errorStatus: store.api.errorStatus,
        slideShowBanner: store.api.slideShowBanner
    };
};


export default connect(mapStateToProps)(Home);
