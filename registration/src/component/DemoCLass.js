import React from 'react'
class DemoClass extends React.Component{
    render(){
        return(
            <div>
                <h1>Demo on class component</h1>
                <h1>Student name: {this.props.name}</h1>
                <h1>Demo on Class Component: {this.props.htno}</h1>
            </div>
        )
    }
}
export default DemoClass


