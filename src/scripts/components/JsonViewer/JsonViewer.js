import React, { PropTypes, Component } from 'react';
import $ from 'jquery';
import { jsonView } from '../../vendor/jquery.json-view.js';
jsonView($);
import './JsonViewer.less';

class JsonViewer extends Component {
    componentDidMount() {
        $('.JsonViewer-container').jsonView(JSON.stringify(this.props.data));
    }

    render() {
        const { data } = this.props;
        return (
            <div>
                <div className="JsonViewer-container">
                    
                </div>
            </div>
        );
    }
}

JsonViewer.propTypes = {
    dataList: PropTypes.string,
};

export default JsonViewer;