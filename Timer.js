import React, { Component } from 'react';
import './Timer.css';
import convert from './Function'
class Timer extends Component {
   constructor (props){
        super(props)
        this.state ={
              timer:0,
              etat : false

              
       }
    
    setInterval(
        () => {
            if(this.state.etat) {
                this.setState({
                    timer:this.state.timer + 1
                })
            }
        },1000
        )
    }
convertir =()=>{
    this.setState({
    etat: true })
}
reset =() =>{
    clearInterval(this.state.timer)
    this.setState({timer:0,
    etat:false})
}
pause =()=>{
    this.setState({
    etat: false })
}
    render() {
        const obj =convert(this.state.timer)
      return (
          <div>
          <div className="time">
    
              <h1> {obj.heur.padStart(2,'0')}:
                   {obj.minute.padStart(2,'0')}:
                   {obj.second.padStart(2,'0')}
              </h1>
              

          </div> 
          <div className="container">
              <h4>Hour</h4>
              <h4>Minute</h4>
              <h4>Second</h4>
          </div> 
          <button onClick = {this.convertir}> start
              
          </button> 
          <button onClick = {this.pause}> pause
              
              </button>  
              <button onClick = {this.reset}> reset
              
              </button>  

          </div>

      
      );
    }
  }
  export default Timer;