import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos/?client_id=bwaTKjAv6Xq43V9wlfeBckrjd5uki7lw5wD4PeBYApc', {
            params: {
                query: term
            }
        });
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
    
};

export default App;