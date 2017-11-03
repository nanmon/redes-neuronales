import * as React from 'react';

import ImageInput from './components/ImageInput';
import GeneratedImages from "./components/GeneratedImages";
import ImgGenApi from './services/api';

export default class ImageGenerator extends React.Component {
  state = {
    files: []
  };

  handleFileSelected = (file) => {
    ImgGenApi.gen(file).then(_files => {
      const files = _files.map(f => window.URL.createObjectURL(f))
      this.setState({files});
    });
  };

  render() {
    return (
      <div className="section" key="section1">
        <h1 className="title">Generador de imágenes</h1>
        <hr/>
        <ImageInput onFileSelected={this.handleFileSelected}/>
        <GeneratedImages files={this.state.files}/>
      </div>
    );
  }
}