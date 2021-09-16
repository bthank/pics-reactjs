import React from 'react';



class SearchBar extends React.Component {

    state = { term: ''};

    // event handler for form submission
    onFormSubmit = (event) => {
        // this line will keep the browser from trying to submit the form automatically on enter and in the process refresh the page
        // always add this to every project form I create; we never want a form to submit automatically on enter
        event.preventDefault();
        console.log('In SearchBar.js onFormSubmit method, term:', this.state.term);

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit}  className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term}  onChange={(e) => this.setState({term: e.target.value})} />
                    </div> 
                </form>
            </div>
        );
    }

}

export default SearchBar;