import React, { PropTypes, Component } from 'react';
import TableViewer from '../TableViewer/TableViewer';
import JsonViewer from '../JsonViewer/JsonViewer';
import './DataSet.less';

class DataSet extends Component {
    render() {
        const { dataFiles, selectedFile, fetchFile, sortCsv } = this.props;
        if(dataFiles === 'fetching...' || dataFiles === 'try again' || dataFiles === '') {
            return (
                <div>
                    <div className="DataSet-container" onClick={ e => this.handleClick(e) }>
                        { dataFiles }
                    </div>
                </div>
            );
        }
        const list = dataFiles.split(', ');
        const dataListComponents = list.map(function(data, i) {
            return (
                <div className='item' key={ i }>
                    {data}
                    <button onClick={() => fetchFile(data) }>查看数据</button>
                </div>
            );
        });
        return (
            <div className="DataSet-container">
                { dataListComponents }
                { selectedFile.constructor === Array && <TableViewer sortCsv={ sortCsv } data={ selectedFile } /> } 
                { selectedFile.constructor === Object && <JsonViewer data={ selectedFile } /> } 
            </div>
        );
    }
}

DataSet.propTypes = {
    dataList: PropTypes.string,
};

export default DataSet;