import React, { Component } from 'react';

let places = [
    {
        name: "Daros",
        location: "69th Street Roosevelt"
    },

    {
        name: "Mamas Empanadas",
        location: "74th Street Roosevelt"
    },

    {
        name: "Sammys Halal",
        location: "75th Broadway"
    },

    {
        name: "Dumplings 2 Go",
        location: "Elmhurst"
    },

];

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
            places: []
        };

        this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {
        this.setState({
            places: places
        });
        this.refs.search.focus();
    }

    handleChange() {
        this.setState({
           searchString: this.refs.search.value
        });
    }

    render() {
        let _places = this.state.places;
        let search = this.state.searchString.trim().toLowerCase();

        if(search.length > 0) {
            places = _places.filter(function(places) {
                return places.name.toLowerCase().match(search);
            });
        }

        return(
            <div>
                <input
                    type="text"
                    value={this.state.searchString}
                    ref="search"
                    onChange={this.handleChange}
                />

                {
                    places.map(l => {
                        return(
                            <li>
                                {l.name} {l.location}
                            </li>
                        );
                    })
                }
            </div>
        );
    }
}

export default Search;