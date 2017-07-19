import React from 'react';
import {Button} from 'react-materialize';
import Moment from 'react-moment';

// Using "Stateless Functional Components"
export default function (props) {
    //console.log(props);
    return (
        <div className="container-fluid">

            <div>

                {(() => {

                    if (props.strike.lat !== "") {

                        console.log("", "https://maps.googleapis.com/maps/api/staticmap?center=" + props.strike.lat + "," + props.strike.lon + "&zoom=5&scale=1&size=400x200&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid|color:0xff0000|label:1|" + props.strike.lat + "," + props.strike.lon);

                        return <p>
                            <img alt="" src={("https://maps.googleapis.com/maps/api/staticmap?center=" + (props.strike.lat) + "," + (props.strike.lon) + "&zoom=5&scale=1&size=400x200&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid|color:0xff0000|label:1|" + (props.strike.lat) + "," + (props.strike.lon) || "https://www.google.com/permissions/images/maps-att.png" )} />
                        </p>
                    }

                })()}

            </div>

            <div className="container row">

                <div className="col s12">


                    {props.strike.narrative}

                    <p>

                        {(() => {

                            if (props.strike.bij_summary_short !== "") {
                                return props.strike.bij_summary_short
                            }

                        })()}
                    </p>


                    <p>{props.strike.country} - {props.strike.location}

                        {(() => {

                            if (props.strike.town !== "") {
                                return <span> in the Town of {props.strike.town}</span>
                            }

                        })()}

                    </p>

                    <p>

                        {(() => {

                            if (props.strike.target !== "") {
                                return <span> Target: {props.strike.target}</span>
                            }

                        })()}

                    </p>

                    <p><em> Date:&nbsp;
                        <Moment fromNow>{props.strike.date}</Moment>
                    </em></p>

                </div>

                <div className="col s12">
                    <table className="striped bordered highlight">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Deaths</td>
                                <td>{props.strike.deaths}</td>
                            </tr>
                            <tr>
                                <td>Civilians</td>
                                <td>{props.strike.civilians || "0"}</td>
                            </tr>
                            <tr>
                                <td>Injuries</td>
                                <td>{props.strike.injuries || "0"}</td>
                            </tr>
                            <tr>
                                <td>Children</td>
                                <td>{props.strike.children || "0"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="col s12">
                    <a href={props.strike.bij_link} target="_blank"><Button className="buttonSpacer waves-effect waves-light blue-grey darken-4">Article</Button></a>
                    <a href={"https://twitter.com/dronestream/status/" + (props.strike.tweet_id)} target="_blank"><Button className="buttonSpacer waves-effect waves-light blue-grey darken-4">Twitter</Button></a>
                </div>

            </div>


        </div>
    );
}