//04-01-2021
import React, { Component } from 'react'

class Wel extends Component {
    constructor(){
        super()
        this.state={
            isLogin:true,
            username:"navya"
        }
    }
    render() {
        let message=''
        // return (
        //     <div>
        //         <h1>Conditional rendering example</h1>
        //     </div>
        // )
        if(this.state.isLogin)
        {
            message=` t  Welcome to  ${this.state.username}`
            
        }
        else{
            message="Welcome to guest"
            
        }
        return(
            <div>
                <h1>{message}</h1>
            </div>
        )
    }
}

export default Wel
