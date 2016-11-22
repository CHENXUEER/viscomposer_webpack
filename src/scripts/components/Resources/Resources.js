/**
 * Created by huwanqi on 2016/10/27.
 */
import React, { Component, PropTypes } from 'react';
import Forms from './Forms';

class Resources extends Component {
    render() {
        const { forms, onBtnClick } = this.props;
        return (
            <div>
                <Forms forms={forms} onBtnClick={onBtnClick}/>
            </div>
        )
    }
}

export default Resources;