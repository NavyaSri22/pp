import React, { Component } from 'react'

class Welcome1 extends Component {
    constructor(){
        super()
        this.state={
            isLogin:true,
            userName:"navya"
        }
    }
    render() {
        return (
            <div>
                {this.state.isLogin ? <h1> ter Welcome to  {this.state.userName}</h1>: <h1>Welcome to Guest</h1>}
                {this.state.isLogin && <h1> short Welcome to  {this.state.userName}</h1>}
            </div>
        )
    }
}

export default Welcome1
