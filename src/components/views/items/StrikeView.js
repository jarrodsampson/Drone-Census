import React from 'react';
import Moment from 'react-moment';
import {Button} from 'react-materialize';
import {
    NavLink
} from 'react-router-dom'

// Using "Stateless Functional Components"
export default function (props) {
    //console.log("Ps", props);
    return (
        <div className="row itemHolder">
            {props.strikes.map((item, i) => {
                return (
                    <div key={i} className="col s12 m12 l12 feedBox padding">
                        <div className="card hoverable">
                            <div className="card-content">
                                <span className="card-title">{item.narrative}</span>

                                <p>{item.country} - {item.location}

                                    {(() => {

                                        if (item.town !== "") {
                                            return <span> in the Town of {item.town}</span>
                                        }

                                    })()}

                                </p>


                                <p>

                                    {(() => {

                                        if (item.target !== "") {
                                            return <span> Target: {item.target}</span>
                                        }

                                    })()}

                                </p>

                                <p><em>
                                    <Moment fromNow>{item.date}</Moment>
                                </em></p>

                                <p>

                                    <div className="row">
                                        <NavLink to={"/strike/" + item.number}>
                                            <Button className="buttonLiner waves-effect waves-light blue-grey darken-4">
                                                More
                                            </Button>
                                        </NavLink>
                                    </div>
                                </p>

                            </div>
                        </div>


                    </div>
                );

            })}


        </div>
    );
}