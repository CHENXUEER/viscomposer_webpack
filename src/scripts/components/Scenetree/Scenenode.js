/**
 * Created by huwanqi on 2016/11/3.
 */
import React, { Component, PropTypes } from 'react';

import './Scenenode.less';

class SceneNode extends Component {

    add() {
        const { node, addNode } = this.props;
        const json = {
            uuid: node.uuid + '-' + node.children.length,
            name: 'new node',
            children: [],
        };
        addNode(node, json);
    }

    remove() {
        const { node, removeNode } = this.props;
        removeNode(node);
    }

    handleClick(e) {
        // if(e.nativeEvent.altKey) {
        //     this.remove();
        // } else {
        //     this.add();
        // }
    }

    render() {
        const { node, width, addNode, removeNode } = this.props;
        const children = node.children;
        const style = {
            width: width
        };
        const childLength = children.length;
        const childWidth = (width - 5 * (childLength - 1)) / childLength;
        const childrenComponents = children.map(function(child, i) {
            return <SceneNode key={i} node={child} width={childWidth} addNode={addNode} removeNode={removeNode}/>;
        });
        return (
            <div className="scenenode-container" style={style}>
                <div className="scenenode" onClick={ this.handleClick.bind(this) }>{node.node.type}</div>
                <div className="children">
                    { childrenComponents }
                </div>
            </div>
        )
    }
}

export default SceneNode;