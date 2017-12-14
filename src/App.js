import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'

import Readme from './pages/Readme';
import Main from './pages/Main';

class App extends Component {
  render() {
    return [
      <BrowserRouter>
        <div>
          <div className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <Link to="/">Redes Neuronales UNISON</Link>
              </h1>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/" exact={true} component={Main}/>
          <Route path="/cnn" render={ () => (
            <Readme 
              url="https://raw.githubusercontent.com/nanmon/cnn/master/README.md"
            />
          )} />
          <Route path="/rnn" render={ () => (
            <Readme 
              url="https://raw.githubusercontent.com/nanmon/rnn/master/README.md"
            />
          )} />
        </Switch>
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
      </div>

      </BrowserRouter>,
    ];
      // <ImageGenerator key="img-gen"/>
  }
}

export default App;
