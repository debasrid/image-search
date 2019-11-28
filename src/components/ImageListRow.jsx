import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './ImageListRow.css';

class ImageListRow extends Component {
    constructor(props){
        super(props);
        this.state = {imageId: this.props.imageComponent._id, imageUrl: this.props.imageComponent.url}
    }


    render () {
        let listRow = (
            <div key={this.state.imageId}>
                <img src={this.state.imageUrl} width="100" height="100"></img>
            </div>
        );

        return listRow;
    }
}

ImageListRow.propTypes = {
    type: PropTypes.string.isRequired
};

export default ImageListRow;