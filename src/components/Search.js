import React from "react";
import { Link } from "react-router-dom";
const search = require("../dist/img/search.svg");

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
        this.valueForm = this.valueForm.bind(this);
    }

    valueForm(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <div>
                <form onSubmit="">
                    <input type="text" value={this.state.value} placeholder="Pesquise por personagem" onChange={this.valueForm} />
                    <Link className="btn_search" to={`/character/search/${this.state.value}`}>
                        <img className="logoMarvel" src={search} title="logo da Marvel" alt="logo da Marvel" />
                    </Link>
                </form>
            </div>
        )
    }
}

export default Search;