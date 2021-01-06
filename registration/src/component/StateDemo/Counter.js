//31-12-2020 State and properties
import React from 'react'
class Counter extends React.Component{
    constructor(){
        super() 
        this.state={
            incrementcount:0,
            decrementcount:0
        }
        
        
        
    }
    
    incrHandler=()=>{
        this.setState({
            incrementcount:this.state.incrementcount+1
        })
    }
    decrHandler=()=>{
        this.setState({
            decrementcount:this.state.decrementcount+1
        })
    }

    render(){
        return(
            <div>
                {/*<h2>{this.props.name} This post send by {this.props.postedBy}</h2>
                <h2>{this.props.count}The count is: { this.state.count}</h2> */}
                <img src={this.props.myImage} alt="logo"/>   <br></br>
                <span><button onClick={this.incrHandler}>Like</button>{ this.state.incrementcount}</span>
                <span><button onClick={this.decrHandler}>Dislike</button>{ this.state.decrementcount} </span>
                
            </div>
        );
    }
}
export default Counter
