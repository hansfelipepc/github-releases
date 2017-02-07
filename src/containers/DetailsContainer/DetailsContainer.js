import React, { PropTypes } from 'react';

// Componentes

/**
 * Este container muestra los detalles para un repositorio concreto
 */
class DetailsContainer extends React.Component {

  stubData() {
    let repo = {
      name: 'v1.0',
      html_url: 'https://github.com/Angelmmiguel/material_icons/releases/tag/v2.2.0',
      author: {
        login: 'Angel',
        avatar_url: 'https://avatars.githubusercontent.com/u/4056725?v=3',
        html_url: 'https://github.com/Angelmmiguel'
      },
      published_at: 12018092381213,
      zipball_url: 'https://github.com/Angelmmiguel/material_icons/archive/v2.2.0.zip',
      tarball_url: 'https://github.com/Angelmmiguel/material_icons/archive/v2.2.0.tar.gz'
    }
    return [
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo)
    ]
  }

  /**
   * UI del contenedor
   */
  render() {
    return <main className="container">
      <h1>Versiones!</h1>
    </main>;
  }
}

// Export the class
export default DetailsContainer;
