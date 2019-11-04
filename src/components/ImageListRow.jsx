import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './ImageListRow.css';

class ImageListRow extends Component {
    constructor(props){
        super(props);
    }


    render () {
        let listRow = (
            <div key={props.imageInStore._id}>
                <img src={props.imageInStore.Url} width="100" height="100"></img>
            </div>
        );

        return listRow;
    }
}

ImageListRow.propTypes = {
    type: PropTypes.string.isRequired
};

export default ImageListRow;