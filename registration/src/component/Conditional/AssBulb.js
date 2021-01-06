import React, { Component } from 'react'

class AssBulb extends Component {
    constructor(){
        super()
        this.state={
            isLight:false, isLight1:false
        }
    }
    lightHandler=()=>{
        this.setState({
            isLight: !this.state.isLight
        })
    }
    light1Handler=()=>{
        this.setState({
            isLight1:! this.state.isLight1
        })
    }
    // light1Handler = ()=>{
    //     this.setState({
    //         isLight1:! this.state.isLight1
    //     })
    // }
    render() {
        return (
            <div>
                <h1>bulb on/off</h1>
                {
                    this.state.isLight ? <img src={this.props.myimg1} height="300" width="300" alt="bulb on"/> :<img src={this.props.myimg} width="300" height="300" alt="bulb off"/>
                }
                <button onClick={this.lightHandler}> {this.state.isLight ? "ON" :"OFF"}</button> <br></br>
                {/* <button onClick={this.lightHandler}>OFF</button> 
                <button onClick={this.lightHandler1}>ON</button>  */}

                {
                    this.state.isLight1 ? <img src={this.props.myimg} height="300" width="300" alt="bulb off"/> :<img src={this.props.myimg1} width="300" height="300" alt="bulb on"/>
                } 
                
                <button onClick={this.light1Handler}> {this.state.isLight1 ? "OFF" :"ON"}</button>

            </div>
        )
    }
}

export default AssBulb

