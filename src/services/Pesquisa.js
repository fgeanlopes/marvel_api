import React, { Component } from "react";
import { Link } from "react-router-dom";
const search = require("../dist/img/search.svg");


class Pesquisa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
        this.valueForm = this.valueForm.bind(this);
        this.enviaPesquisa = this.enviaPesquisa.bind(this);
    }
    enviaPesquisa(event) {
        event.preventDefault();
    }
    valueForm(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.enviaPesquisa}>
                    <input type="text" value={this.state.value} placeholder="Pesquise por personagem" onChange={this.valueForm} />
                    <Link className="btn_search" to={`/personagem/pesquisa/${this.state.value}`}>
                        <div type="submit" value="Submit">
                            <img className="logoMarvel" src={search} title="logo da Marvel" alt="logo da Marvel" />
                        </div>
                    </Link>
                </form>
            </div>
        )
    }
}

export default Pesquisa;