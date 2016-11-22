/**
 * Created by huwanqi on 2016/11/3.
 */
export const SCENETREE_LOAD = 'SCENETREE_LOAD';
export const SCENETREE_ADD = 'SCENETREE_ADD';
export const SCENETREE_REMOVE = 'SCENETREE_REMOVE';

export function loadSceneTree(json) {
    return {
        type: SCENETREE_LOAD,
        json
    }
}

export function addSceneNode(node, json) {
    return {
        type: SCENETREE_ADD,
        node,
        json
    }
}

export function removeSceneNode(node) {
    return {
        type: SCENETREE_REMOVE,
        node
    }
}