/**
 * Created by huwanqi on 2016/10/27.
 */
import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import headbar from './headbar';
import resources from './resources';
import scenetree from './scenetree';
import dataFiles from './datafiles';

const rootReducer = combineReducers({
    headbar: undoable(headbar),
    resources,
    scenetree,
    dataFiles,
});

export default rootReducer;