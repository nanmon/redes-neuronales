import * as React from "react";

export default class ImageInput extends React.Component {
  state = {};

  onFile = (ev) => {
    if (!ev.currentTarget.files) {
      return;
    }
    this.props.onFileSelected(ev.currentTarget.files[0])
    this.setState({file: ev.currentTarget.files[0]});
  };

  render() {
    let fileClasses = ['file is-primary is-boxed'];
    if (this.state.file) { fileClasses.push('has-name'); }
    return (
      <div className="field">
        <div className={fileClasses.join(' ')}>
          <label className="file-label">
            <input className="file-input" type="file" onChange={this.onFile}/>
            <span className="file-cta">
              <span className="file-icon">
                <i className="fa fa-cloud-upload"></i>
              </span>
              <span className="file-label">
                Seleccionar imágen…
              </span>
            </span>
            {this.state.file &&
              <span className="file-name">
                {this.state.file.name}
              </span>
            }
          </label>
        </div>
      </div>
    );
  }
}