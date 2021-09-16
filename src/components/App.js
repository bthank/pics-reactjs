import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (searchTerm) => {
        //console.log('In App.js, searchTerm is: ',searchTerm);

         const response = await unsplash.get('/search/photos',{
            params: { query: searchTerm }
        }); 
      /*  .then((response) => {
            console.log(response.data.results);
        })  
        ;*/

        console.log('In App.js response.data.results: ', response.data.results);
        console.log('In App.js this: ', this);
        this.setState({ images: response.data.results });
    }

    render () {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
                Found: { this.state.images.length } images
            </div>
        );    
    };

}

export default App;