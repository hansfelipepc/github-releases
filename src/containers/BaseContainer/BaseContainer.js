import React, { PropTypes } from 'react';
import SearchContainer from '../SearchContainer'
import { Link, IndexLink } from 'react-router';

class BaseContainer extends React.Component{

    render(){
        return <main className="container">
            <nav>
                <IndexLink to="/" className="Link" activeClassName="Link--active">Home</IndexLink>
                <Link to="/about" className="Link" activeClassName="Link--active">About</Link>
            </nav>
            {this.props.children || <SearchContainer/>}
        </main>
    }

}

export default BaseContainer;