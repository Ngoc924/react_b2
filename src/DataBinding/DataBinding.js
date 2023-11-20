import React, { Component } from 'react'

export default class DataBinding extends Component {
    title = "Profile User";
    imgUrl = "https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
  render() {
    let username = "ngoc"
    return (
      <div>
        <h4>
        DataBinding
        </h4>
        <h2>{this.title}</h2>
        <h2>username: {username}</h2>

        <img src={this.imgUrl} className="w50" alt=''/>
        </div>
    )
  }
}
