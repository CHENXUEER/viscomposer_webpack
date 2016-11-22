/**
 * Created by huwanqi on 2016/10/27.
 */
import { combineReducers } from 'redux';
import { FETCH_FILES_REQUEST, FETCH_FILES_SUCCESS, FETCH_FILES_FAIL, 
    FETCH_FILE_REQUEST, FETCH_FILE_SUCCESS, FETCH_FILE_FAIL, SORT_CSV } from '../actions/datafiles';

function list(state = '', action = {}) {
	const type = action.type;
    switch(type) {
        case FETCH_FILES_REQUEST:
            return 'fetching...';
        case FETCH_FILES_SUCCESS:
            return action.list;
        case FETCH_FILES_FAIL:
            return 'try again';
        default:
            return state;
    }
}

function selectedFile(state = '', action = {}) {
    const type = action.type;
    switch(type) {
        case FETCH_FILE_REQUEST:
            return 'fetching...';
        case FETCH_FILE_SUCCESS:
            return action.data;
        case FETCH_FILE_FAIL:
            return 'try again';
        case SORT_CSV:
            const data = state.slice(1);
            const fields = state.slice(0, 1)[0];
            const { field, order } = action;
            const index = fields.indexOf(field);
            data.sort(function(a, b) {
                const c1 = parseFloat(a[index]) || a[index];
                const c2 = parseFloat(b[index]) || b[index];
                if(order === 0) {
                    if(c1 > c2) {
                        return 1;
                    } else if(a[index] === b[index]) {
                        return 0;
                    } else {
                        return -1;
                    }
                }
                if(c1 > c2) {
                    return -1;
                } else if(a[index] === b[index]) {
                    return 0;
                } else {
                    return 1;
                }
            });
            return [fields].concat(data);
        default:
            return state;
    }
}

const dataFiles = combineReducers({
    list,
    selectedFile
});

export default dataFiles;