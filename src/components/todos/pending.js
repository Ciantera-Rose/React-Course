import React, { Component } from "react";
import { TaskItem } from "./task-item";

const pendingTodos = [
    { item: "task" },
    { item: "task" }, 
    { item: "task" },
    { item: "task" },
    { item: "task" }
]

//Functionl Component that can take props
//React sees this and assumes you want to create a functional component


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
    //Call functional component from within the render function
    render() {
        return ( 
        <div>
            <h2>{this.props.heading}</h2>
            <li><TaskItem item="Task One"/></li>
            <li><TaskItem item="Task Two"/></li>
            <li><TaskItem item="Task Three"/></li>
            <li><TaskItem item="Task Four"/></li>
            <li><TaskItem item="Task Five"/></li>
        </div> 
        )
    }
}
