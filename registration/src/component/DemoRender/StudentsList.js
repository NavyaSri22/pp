import React, { Component } from 'react'

class StudentsList extends Component {
    constructor() {
        super()
    
        this.state = {
             studentsInfo:[
                 {
                     htno:"17K61A0523",
                     name:"madhuri",
                     percentage:92
                 },
                 {
                    htno:"17K61A0557",
                    name:"Navya",
                    percentage:91
                },
                {
                    htno:"17K61A0554",
                    name:"Anusha",
                    percentage:91
                },
             ]
        }
    }
    incrHandler=()=>{
        this.setState({
            incrementcount:this.state.incrementcount+1
        })
    }
    render() {
        return (
            <div>
                <h1>Welcome to students list</h1>
                <ul>
                    {
                        this.state.studentsInfo.map(student => <li>{student.name}</li>)
                    }
                </ul>
                <table border="1">
                    <thead></thead>
                    <tbody>
                    {
                        this.state.studentsInfo.map(student => {
                            return(
                                <tr key={student.htno}>
                                    <td>{student.htno}</td>
                                    <td>{student.name}</td>                      
                                    <td>{student.percentage}</td>
                                    <td><input type="number" onClick={this.incrHandler} ></input></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                    <tfoot></tfoot>

                </table>
            </div>
        )
    }
}

export default StudentsList
