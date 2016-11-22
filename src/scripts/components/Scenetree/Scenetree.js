/**
 * Created by huwanqi on 2016/11/3.
 */
import React, { Component, PropTypes } from 'react';
import SceneNode from './Scenenode.js';

class SceneTree extends Component {
    render() {
        const { tree, addNode, removeNode } = this.props;
        const width = 400;
        return (
            <div className="scenetree-container">
                <SceneNode node={tree} width={width} addNode={addNode} removeNode={removeNode}/>
            </div>
        )
    }
}

export default SceneTree;