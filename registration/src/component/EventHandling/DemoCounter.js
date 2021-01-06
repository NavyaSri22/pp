//02-01-2021 Event Handling
import React, { Component } from 'react'
//import DemFun from
class DemoCounter extends Component {
    constructor(){
        super()
        this.state={
            headCount:0,buttonCount:0
        }
    }
    headHandler=()=>{
        //<Demfun/>
        //alert('Hey')
        this.setState({
            headCount:this.state.headCount+1

        })
    }
    clickHandler=()=>{
        this.setState({
            buttonCount:this.state.buttonCount+1
        })
    }
    nameHandler=(e)=>{
        console.log(e.target.value)
        this.setState({
            userName:e.target.value
        })
    }
    focusHandler=()=>{
        alert('enter a valid username')
    }
    blurHandler=()=>{
        alert('thanks for your details')
    }
    incrByFive=()=>{
        this.setState({
            headCount:this.state.headCount+5
        })
    }
    


    render() {
        return (
            <div>
                <h1 onMouseOver={this.headHandler} onDoubleClick={this.incrByFive}>This header count is:{this.state.headCount} </h1>
                <input type="text" value={this.state.userName} onChange={this.nameHandler} onFocus={this.focusHandler} onBlur={this.blurHandler} />

                

                <button onClick={this.clickHandler}>Count: {this.state.buttonCount}</button> {this.state.userName}

                {/* <input type="number" value={this.state.convertorCount} onChange={this.celsiusHandler}/>  */}
            </div>
        )
    }
}

export default DemoCounter
