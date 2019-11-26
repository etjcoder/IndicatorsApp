import React, { Component } from "react";
import "./Home.css";
import Nav from "../components/Nav";


class ProtegeDash extends Component {

    state = {
        user: ""
    }

    componentDidMount() {
        console.log("Loaded Protege Page")
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="jumbotron" style={{ height: '500px' }}>
                    <h1>You're on the Protege Dashboard!</h1>
                </div>
            </div>
        )
    }
}

export default ProtegeDash