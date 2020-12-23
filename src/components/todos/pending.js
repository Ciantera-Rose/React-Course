import React, { Component } from "react";

const pendingTodos = [
    { item: "task" },
    { item: "task" }, 
    { item: "task" },
    { item: "task" },
    { item: "task" }
]

//Functionl Component that can take props
const TaskItem = props => {
    return ( 
        <ul>
            <li>{props.item}</li>
        </ul>
    )
}

//Class component
export default class Pending extends Component {
    constructor(props) {
        super()

        this.state = {
            pending: pendingTodos,
            isPending: true,
            isComplete: false
        }
    }
    render() {
        return ( 
        <div>
            <h2>{this.props.heading}</h2>
            <li><TaskItem item="Some task"/></li>
        </div> 

           
      
        )
    }
}
