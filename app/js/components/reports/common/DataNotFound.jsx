import React, { Component } from 'react';
import './DataNotFound.css';

class DataNotFound extends Component {


    render() {
        return (
            <div className="NotFoundWrapper">
                <div className="attentionSign">
                    <img src="img/warning.png" width="80"/>
                </div>
                <div>
                    No Data found { this.props.componentName != null && <span>for {this.props.componentName}</span>}
                </div>

            </div>
        );
    }

}

export default DataNotFound;