/**
 * Created by huwanqi on 2016/10/27.
 */
import React, { PropTypes, Component } from 'react';
import './Forms.less';

let count = 5;

class Forms extends Component {
    render() {
        const { forms } = this.props;
        const formsComponents = forms.map(function(form, i) {
            return <div className="item" key={ i }>{form}</div>;
        });
        return (
            <div>
                <div className="Forms-container" onClick={ e => this.handleClick(e) }>
                    { formsComponents }
                </div>
            </div>
        );
    }

    handleClick(e) {
        this.props.onBtnClick('type' + count++);
    }
}

Forms.propTypes = {
    forms: PropTypes.array,
};

export default Forms;