import React, { Component } from 'react';
import "./index.css"

const glassesData = [
  { id: 1, image: 'v1.png' },
  { id: 2, image: 'v2.png' },
  { id: 3, image: 'v3.png' },
  { id: 4, image: 'v4.png' },
  { id: 5, image: 'v5.png' },
  { id: 6, image: 'v6.png' },
  { id: 7, image: 'v7.png' },
  { id: 8, image: 'v8.png' },
  { id: 9, image: 'v9.png' },

];

export default class GlassesApp extends Component {
  state = {
    selectedGlasses: glassesData[0], 
  };

  handleGlassesChange = (selectedGlasses) => {
    this.setState({ selectedGlasses });
  };

  imgURL="./Bài tập glasses/glassesImage/model.jpg"
  render() {
    return (
      <div>
        <div className="model-container">
     
          <img
            src={this.imgURL}
            alt=''
            className="model-image"
          />
           <img
              src={`./Bài tập glasses/glassesImage/${this.state.selectedGlasses.image}`}
              alt=''
              className="selected-glasses-image"
            />
        </div>
        <div className="glasses-list">

  {glassesData.map((glasses) => (
    <button
      key={glasses.id}
      onClick={() => this.handleGlassesChange(glasses)}
      className="btn btn-light"
    >
      <img
        src={`./Bài tập glasses/glassesImage/${glasses.image}`}
        alt=''
        className="button-image"
      />
    </button>
  ))}
</div>

      </div>
    );
  }
}