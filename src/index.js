/**
 * Created by hzhuwanqi on 2016/9/9.
 */

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from './scripts/containers/Home/Home';
import rootReducer from './scripts/reducers/index';

import testRender from './scripts/util/render/render';

let strJSON = '{ "type": "canvas" ,"children": [{ "type": "circle"}]}';
const root = testRender.parse('JSON', { string: strJSON }).root;

const initialState = {
	headbar: {},
	resources: {},
	scenetree: { tree: root },
}

let store = createStore(rootReducer, initialState);

let rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <Home />
    </Provider>,
    rootElement
);