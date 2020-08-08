import React, { Component } from "react";

class teste extends Component {
    constructor() {
        super()
        this.state = {
            nome: "Gean",
        }
    }
    componentDidMount() {
        this.setState({ nome: "pedro" });
    }
    render() {
        return (
            <div>
                <p>Nome : {this.state.nome}</p>
            </div>
        )
    }
}

export default teste;
