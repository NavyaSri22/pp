import React from 'react';

class FtoCConvertor extends React.Component{
    constructor(props){
        super(props);
        this.state={
            c:0,f:0
        };
    }
    inputHandler=(e)=>{
        this.setState({ f: e.target.value});
    };
    handleInput=(e)=>{
        this.setState({ c: e.target.value});
    };
    render(){
        const tem=this.state.f;
        const celsius=(tem-32)*(5/9);
        
        const tempe=this.state.c;
        const fahrenheit=(tempe*9)/5+32;
        return(
            <div>
 
                    <h1>Please enter fahrenheit</h1>
                    <input type='number' value={tem} onChange={this.inputHandler}></input> <br></br> <br></br>
                    <label>celsius is </label>{celsius}
                    <h1>Please enter celsius</h1>
                    <input value={tempe} onChange={this.handleInput}></input> <br></br>
                    <label>The fahrenheit is:</label> {fahrenheit}
                
            </div>
        )
    }
}
export default FtoCConvertor