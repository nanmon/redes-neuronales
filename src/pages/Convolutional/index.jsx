import React, { Component } from 'react'
import * as marked from 'marked';

export default class ConvolutionalPage extends Component {
  
  state = {
    readme: null
  };


  componentWillMount() {
    fetch('https://raw.githubusercontent.com/nanmon/red-convolucional/master/README.md')
      .then(res => res.blob())
      .then(blob => {
        const reader = new FileReader();
        return new Promise(resolve => {
          reader.addEventListener('loadend', e => {
            resolve(e.srcElement.result);
          });
          reader.readAsText(blob);
        })
      }).then(readme => {
        this.setState({readme: marked(readme)});
      });
  }

  render() {
    return (
      <div className="container">
        <div className="content" key="readme" dangerouslySetInnerHTML={this.state.readme && {__html: marked(this.state.readme)}} />
      </div>
    );
  }
}
