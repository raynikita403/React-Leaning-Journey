import { Component } from "react";

export class Car extends Component{
    constructor(){
        super();
        this.state={
            isCarStarted:true
        }
    }
    HandleStop=()=>{
        this.setState({isCarStarted:false})
    }
    HandleStart=()=>{
        this.setState({isCarStarted:true})
    }
    render(){
        if(this.state.isCarStarted===true)
        return<>
        <h5>The Car is Moving on the Road</h5>
        <Bike start={this.state.isCarStarted}/>
        <button onClick={this.HandleStop}>Stop</button>

        </>
        else{
             return<>
        <h5>The Car is not running</h5>
         <Bike start={this.state.isCarStarted}/>
         <button onClick={this.HandleStart}>Start</button>
        </>
        }
    }
}
export class Bike extends Component{
    render(){
       if(this.props.start==true)
        return <>
        <p>Bike Started And Running</p>
        </>
        else{
             return <>
        <p>Bike Stopped </p>
        </>
        }
    }
}