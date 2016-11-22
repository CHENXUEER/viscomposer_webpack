/**
 * Created by huwanqi on 2016/10/27.
 */
import { combineReducers } from 'redux';
import { TEST_HELLO_WORLD, COUNT_DOWN } from '../actions/headbar';

function message(state = 'now: ', action = {}) {
	const type = action.type;
    switch(type) {
        case TEST_HELLO_WORLD:
            return action.text;
        default:
            return state;
    }
}

function count(state = 0, action = {}) {
	const type = action.type;
	let newState = state;
    switch(type) {
        case COUNT_DOWN:
            return newState + 1;
        default:
            return state;
    }
}

const headbar = combineReducers({
    message,
    count
});

export default headbar;