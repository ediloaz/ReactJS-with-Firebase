import React, { Component } from 'react';
import Firebase from 'firebase';

class FileUpload extends Component{
  constructor () {
    super();
    this.state = {
      uploadValue : 0,
      picture : null
    };
  }

  render () {
    return (
      <div>
        <progress value={this.state.uploadValue} max="100"></progress>
        <br/>
        <input type="file" onChange={this.props.onUpload} />
        <br/>
        <img width="300" src={this.state.picture} alt="" />
      </div>
    );
  }
}

export default FileUpload;
