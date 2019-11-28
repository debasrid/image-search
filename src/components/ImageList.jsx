import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ImageListRow from './ImageListRow.jsx';

//import classes from './ImageList.css';

class ImageList extends Component {
    constructor(){
        super();
        this.state = { listOfImages: [] };
    }
  
    getAllImages = () =>{
      axios.get(`http://localhost:5000/api/images`)
      .then(responseFromApi => {
        this.setState({
          listOfImages: responseFromApi.data
        })
      })
    }
  
    componentDidMount() {
      this.getAllImages();
    }

    render () {
        let list = (
            <div>
                <div style={{width: '60%', float:"left"}}>
                { this.state.listOfImages.map( imageInStore => {
                    return (
                        <ImageListRow imageComponent={imageInStore}></ImageListRow>
                    )})
                }
                </div>
            </div>
        );

        return list;
    }
}

ImageList.propTypes = {
    type: PropTypes.string.isRequired
};

export default ImageList;