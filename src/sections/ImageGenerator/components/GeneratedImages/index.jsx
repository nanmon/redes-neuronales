import React from "react";

export default class GeneratedImages extends React.Component {
  render() {
    return (
      <div className="columns is-multiline">
        {this.props.files.map(file => (
          <div className="column is-narrow">
            <figure className="image is-128x128"> 
              <img src={file}/>
            </figure>
          </div>
        ))}
      </div>
    );
  }
}