//04-01-2021
import React, { Component } from 'react'

class Welcome extends Component {
    constructor(){
        super()
        this.state={
            isLogin:true,
            username:"navya"
        }
    }
    render() {
        // return (
        //     <div>
        //         <h1>Conditional rendering example</h1>
        //     </div>
        // )
        if(this.state.isLogin)
        {
            return(
                <div>
                    <h1> if-else Welcome to {this.state.username} </h1>
                </div>
            )
        }
        else{
            return(
                <div>Welcome to Guest</div>
            )
        }
    }
}

export default Welcome
