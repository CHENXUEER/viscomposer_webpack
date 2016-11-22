/**
 * Created by huwanqi on 2016/10/27.
 */
import { combineReducers } from 'redux';
import { FORMS_ADD } from '../actions/forms';
import { MARKS_ADD } from '../actions/marks';

function forms(state = ['type1', 'type2', 'type3', 'type4'], action = {}) {
    switch (action.type) {
        case FORMS_ADD:
            return [
                ...state,
                action.name
            ];
        default:
            return state;
    }
}

function marks(state = ['circle', 'rect', 'path'], action = {}) {
    switch (action.type) {
        case MARKS_ADD:
            return [
                ...state,
                action.name
            ];
        default:
            return state;
    }
}

const resources = combineReducers({
    forms,
    marks,
});

export default resources;