import React from 'react';
import {
    NavLink
} from 'react-router-dom'
import Headroom from 'react-headroom';
import Back2Top from 'react-back2top';

import {Navbar, NavItem, Button, Modal, Icon} from 'react-materialize';

export default function(props) {
    return (
        <div className="App">
                <header>

                    <Headroom>
                        <Navbar brand='Drone Census' right className="blue-grey darken-4" options={{ closeOnClick: true }}>
                            <li><NavLink to="/data" activeClassName="activeV">Data</NavLink></li>
                            <li><NavLink to="/strike/list" activeClassName="activeV">Strikes</NavLink></li>
                            <li><NavLink to="#aboutModal">About</NavLink></li>
                            <NavItem href="//api.dronestre.am/" target="_blank" rel="noopener noreferrer">API</NavItem>
                            <li><NavLink to="/discover" activeClassName="activeV"><Icon>search</Icon></NavLink></li>
                        </Navbar>
                    </Headroom>
                </header>

                <main>

                    <div className="appRoot2">
                        {props.children}
                    </div>



                    <Back2Top>
                        <div className="scrollTop">
                            <Button floating large className='black' waves='light' icon='navigation' />
                        </div>
                    </Back2Top>

                    <Modal
                        header='Drone Census'
                        id='aboutModal'>
                        <div>
                            <p>
                                Get updates on the most recent and historical drone strikes conducted by the United States Government.
                            </p>

                            <p><strong>What's New Version 1.1?</strong></p>
                            <p>
                                <ul>
                                    <li>- Scatterplot charts containing the number of reported deaths of targets, civilians, and children.</li>
                                    <li>- Get the full list of drone strikes conducted by the US government.</li>
                                    <li>- View articles and twitter posts about the strike.</li>
                                </ul>
                            </p>
                            <p>
                                Version 1.1 Created By Jarrod Sampson
                            </p>
                        </div>
                    </Modal>
                </main>

                <footer className="page-footer black">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Drone Census</h5>
                                <p className="grey-text text-lighten-4">Get updates on the most recent and historical drone strikes conducted by the United States Government.</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">About The Developer</h5>
                                <ul className="col l6 m6 s6">
                                    <li><a className="grey-text text-lighten-3" href="//github.com/planlodge" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                    <li><a className="grey-text text-lighten-3" href="//www.linkedin.com/in/jarrodsampson/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                </ul>
                                <ul className="col l6 m6 s6">
                                    <li><a className="grey-text text-lighten-3" href="//Ko-fi.com/jarrodsampson" target="_blank" rel="noopener noreferrer">Donate</a></li>
                                    <li><a className="grey-text text-lighten-3" href="//www.npmjs.com/~planlodge" target="_blank" rel="noopener noreferrer">NPMJS</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright blue-grey darken-4">
                        <div className="container">
                            © 2017 Planlodge
                            <a className="grey-text text-lighten-4 right" href="//planlodge.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
                        </div>
                    </div>

                </footer>

        </div>

    );
}