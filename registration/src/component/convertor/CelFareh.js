import React from 'react';

class CelFareh extends React.Component{
    constructor(props){
        super(props);
        this.state={temp:32,c:0};
    }
    handleInput=(e)=>{
        this.setState({ c: e.target.value});
    };
    render(){
        const tem=this.state.c;
        const fahrenheit=(tem*9)/5+32;
        return(
            <div>
                <h2>hello.</h2>
                <fieldset>
                    <legend>Please enter celsius</legend>
                    <input value={tem} onChange={this.handleInput}></input> <br></br>
                    <label>The fahrenheit is:</label> {fahrenheit}
                </fieldset>
            </div>
        )
    }
}
export default CelFareh