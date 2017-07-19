import React from 'react';
import { Provider } from 'react-redux';
import store from '../Store';
import router from '../router';

import ReactTestUtils from 'react-dom/test-utils';
import chai from "chai";
import jsxChai from "jsx-chai";

chai.use(jsxChai);

var expect = chai.expect;

import NotFound from '../components/containers/NotFound';

describe("Main Container", function(){

    var renderer, output;

    beforeEach(function(){
        renderer = ReactTestUtils.createRenderer();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        renderer.render(<Provider store={store}>
            {router}
        </Provider>, div);
    });

    it('renders by itself', () => {
        renderer.render(
            <Provider store={store}>
                <NotFound />
            </Provider>
        );
        output = renderer.getRenderOutput();
    });

});