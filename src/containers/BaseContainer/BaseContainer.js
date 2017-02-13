import React, { PropTypes } from 'react';
import SearchContainer from '../SearchContainer'
import { Link, IndexLink } from 'react-router';
import Header from '../../components/Header'

class BaseContainer extends React.Component{

    render(){
        return <main className="container">
            <Header/>
            <nav className="Navigation">
                <IndexLink to="/" className="Link" activeClassName="Link--active">Home</IndexLink>
                <Link to="/about" className="Link" activeClassName="Link--active">About</Link>
            </nav>
            {this.props.children || <SearchContainer/>}
        </main>
    }

}

export default BaseContainer;