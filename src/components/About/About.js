import React from 'react';

// Componentes
import ExternalLink from '../ExternalLink';

/**
 * Página de About
 */
class BaseComponent extends React.Component {
  /**
   * Nunca debemos de actualizar este componente
   */
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  get ghProfileLink() {
    return 'https://github.com/hansfelipepc';
  }

  /**
   * Render the BaseComponent component
   */
  render() {
    return <section className="About">
      <p>You can see my other projects here:
          { ' ' }<ExternalLink to={ this.ghProfileLink }>@hansfelipepc</ExternalLink>
      </p>
    </section>
  }
}

// Export the class
export default BaseComponent;
