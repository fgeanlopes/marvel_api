import React, { Component } from "react";
import api from "../services/Api";

class Page_pesquisa extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         comics: [],
    //         data: [],
    //     }
    //     this.handleChaptersChange = this.handleChaptersChange.bind(this);
    //     this.handlePageClick = this.handlePageClick.bind(this);
    // }


    // handleChaptersSubmit(event) {
    //     event.preventDefault();
    //     const urlChapters = `characters?name=${this.state.value}${KeyMarvel}`;
    //     api.get(urlChapters)
    // }

    // handleChaptersChange(event) {
    //     this.setState({ value: event.target.value });
    // }


    render() {
        // const teste = this.props.match.params.pesquisa
        const teste = this.props.match.params;
        console.log("Valor passado foi", teste);

        // <form onSubmit={this.handleChaptersSubmit}>
        //     <input type="text" value={this.state.value} onChange={this.handleChaptersChange} />
        //     <input type="submit" value="Submit" />
        // </form>

        return (
            // <div>
            //     <Link to={{ pathname: `/pesquisa/123` }}>PESQUISAAA</Link>
            // </div>
            <p>PPPPPPPPPPPPPPPPPPPPPPESQUISA PERSONAGEM</p >
        )
    }
}

export default Page_pesquisa;