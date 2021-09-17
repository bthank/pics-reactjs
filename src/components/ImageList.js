import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = (props) => {
    console.log('In ImageList.js: ', props.images);
    // destructure off image into 'description, id and urls' properties
    const images = props.images.map((image) => {
        return  <div>
                    <ImageCard key={image.id} image={image} />  
                </div>;
    
    });

    return <div className="image-list">{images}</div>;
};

export default ImageList;