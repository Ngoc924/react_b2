import React, { Component } from 'react'

export default class DemoState extends Component {
state = {
    soLuong :1,
};
handleTang=() => {
    this.setState({soLuong: this.state.soLuong + 1});
};
handleGiam=(soLuong) => {
    this.setState({soLuong: this.state.soLuong - soLuong});
};
// hàm  có tham số => bọc them bằng arrow func
  render() {
    return (
    <div>
        <h4>
        DemoState
        </h4>
        <button onClick={()=>{this.handleGiam(10); } } 
        className='btn btn-dark'>-</button>
        <strong>{this.state.soLuong}</strong>
        <button onClick={this.handleTang} className='btn btn-dark'>+</button>
      </div>
    )
  }
}
