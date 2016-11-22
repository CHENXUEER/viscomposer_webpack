import React, { PropTypes, Component } from 'react';
import './TableViewer.less';

class TableViewer extends Component {
    render() {
        const { data, sortCsv } = this.props;
        const field = data[0];
        const entries = data.slice(1);
        const tHeadComponents = field.map(function(f, i) {
            return (
                <th key={ i }>
                    { f } 
                    <button onClick={ () => sortCsv(f, 0) }>升序</button>
                    <button onClick={ () => sortCsv(f, 1) }>降序</button>
                </th>
            );
        });
        const tBodyComponents = entries.map(function(e, i) {
            const trComponents = e.map(function(ee, ii) {
                return <td key={ ii }>{ ee }</td>
            });
            return <tr key={ i }>{ trComponents }</tr>;
        });
        return (
            <div>
                <div className="TableViewer-container">
                    <table>
                        <thead>
                            <tr>{ tHeadComponents }</tr>
                        </thead>
                        <tbody>
                            { tBodyComponents }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

TableViewer.propTypes = {
    dataList: PropTypes.string,
};

export default TableViewer;