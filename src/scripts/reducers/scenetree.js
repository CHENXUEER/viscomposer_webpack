/**
 * Created by huwanqi on 2016/11/3.
 */
import { combineReducers } from 'redux';

import { SCENETREE_LOAD, SCENETREE_ADD, SCENETREE_REMOVE } from '../actions/scenetree.js';

function findNode(tree, node) {
    if(tree.node.uuid === node.node.uuid) {
        return tree;
    }
    for(let i = 0; i < tree.children.length; i++) {
        let result = findNode(tree.children[i], node);
        if(result) {
            return result;
        }
    }
    return null;
}

function findNodeToDelete(tree, node) {
    if(tree.node.uuid === node.node.uuid) {
        return tree = {};
    }
    let length = tree.children.length;
    tree.children = tree.children.filter((d) => d.node.uuid !== node.node.uuid);
    if(tree.children.length !== length) {
        return tree;
    }
    for(let i = 0; i < tree.children.length; i++) {
        findNodeToDelete(tree.children[i], node);
    }
    return tree;
}

function tree(state = { }, action = {}) {
    const type = action.type;
    let newState;
    switch(type) {
        case SCENETREE_LOAD:
            return action.json;
        case SCENETREE_ADD:
            newState = Object.assign({}, state);
            let node = findNode(newState, action.node);
            node.children.push(action.json);
            return newState;
        case SCENETREE_REMOVE:
            newState = Object.assign({}, state);
            findNodeToDelete(newState, action.node);
            return newState;
        default:
            return state;
    }
}

const scenetree = combineReducers({
    tree,
});

export default scenetree;