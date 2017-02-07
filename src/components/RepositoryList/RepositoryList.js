import React, { PropTypes } from 'react';
import RepositoryRow from '../RepositoryRow';
import HintMessage from '../HintMessage';

/**
 * Muestra los repositorios en una lista.
 */
class RepositoryList extends React.PureComponent {
  static propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    queried: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired
  };

  renderMessage(){
    let text = "", l = this.props.repositories.length;

    if (this.props.loading) {
      text = <span>Searching results for <b>{this.props.search}</b></span>;
    } else if (l > 0) {
        text = <span>We found <b>{ l }</b> repositories for <b>{this.props.search}</b></span>;
    } else if ( l === 0 && this.props.queried){
        text = <span>We could't find any repositories matching <b>{this.props.search}</b>. Try another search</span>;
    } else {
      text = 'Type the name of a repository and click Search';
    }
    return <HintMessage>{text}</HintMessage>;
  };

  renderTable(){
    if (this.props.repositories.length === 0 ) {return null;}
    return <table className="u-full-width">
      <thead>
        <tr>
          <th>Repository</th>
          <th>Owner</th>
          <th>Stars</th>
          <th>Forks</th>
        </tr>
      </thead>
      <tbody>
      {this.props.repositories.map(repo =>
        <RepositoryRow repo={repo} key={repo.id}/>
      )}
      </tbody>
    </table>
  }
  /**
   * Render the RepositoryList component
   */
  render() {
    return <section className="RepositoryList">
        {this.renderMessage()}
        {this.renderTable()}
    </section>;
  }
}

// Export the class
export default RepositoryList;
