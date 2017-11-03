import React, { Component } from 'react';

import Convolutional from './pages/Convolutional';

class App extends Component {
  render() {
    return [
      <div className="hero is-primary" key="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Redes Neuronales UNISON</h1>
          </div>
        </div>
      </div>,
      <Convolutional key="convolutional"/>,
      <footer className="footer" key="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              By <a href="http://github.com/nanmon">Nan Montaño</a>
              <br/>
              <a className="button" href="http://github.com/nanmon/redes-neuronales">
                <span className="icon">
                  <i className="fa fa-github"/>
                </span>
                <span>Github</span>
              </a>
            </p>
          </div>
        </div>
      </footer>
      // <ImageGenerator key="img-gen"/>
    ];
  }
}

export default App;
