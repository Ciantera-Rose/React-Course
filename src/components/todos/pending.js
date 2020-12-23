import React, { Component } from "react";

const pendingTodos = [
    { item: "task" },
    { item: "task" }, 
    { item: "task" },
    { item: "task" },
    { item: "task" }
]

//Class component
export default class Pending extends Component {
    constructor(props) {
        super()

        this.state = {
            pending: pendingTodos,
            isOpen: true
        }
    }
    render() {
        return  <h2>{this.props.heading}</h2>
    }
}
