import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  // SO THIS imagedata( below is a method of a class)
  // and below (render) we use this.imageData() to call our method 


  render() {
    const imgData = this.props.data
  
    return (
      <div>
        <h1>Kalvium Gallery</h1>
        <p>APPCLASS</p>
        <div className='row'>
          {
            imgData.map((image)=>{
              return(
                <div className='column' key={image.id}>
                  <img src={image.img} alt=""/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
