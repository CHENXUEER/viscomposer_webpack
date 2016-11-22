/**
 * Created by huwanqi on 2016/10/27.
 */
import React, { PropTypes, Component } from 'react';
import './Headbar.less';

class Headbar extends Component {
    render() {
        const { message, count, countDown } = this.props;
        return (
            <div>
                <div className="Headbar-container" onClick={ countDown }>
                    { message + count }
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}

Headbar.propTypes = {
    message: PropTypes.string,
    onBtnClick: PropTypes.func,
};

export default Headbar;