import React, { Component } from "react";
import Api from "../services/Api";
import ReactPaginate from 'react-paginate';
import KeyMarvel from "../services/KeyMarvel";
import { Link } from "react-router-dom";

import './scss/Home.scss';

import Form_pesquisa from "../services/Pesquisa";
const logoMarvel = require("../dist/img/marvelLogo.svg");



class Page_home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comics: [],
            data: [],
            offset: 0,
            perPage: 10,
            currentPage: 0,
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }
    componentDidMount() {
        this.receivedData();
    }
    receivedData() {
        const urlGetQuadrinho = `comics?${KeyMarvel}&orderBy=title&limit=100&offset=0`;
        Api.get(urlGetQuadrinho)
            .then(res => {
                const data = res.data.data.results;
                this.setState({ comics: data });
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
                const postData =
                    slice.map(comic =>
                        <React.Fragment>
                            <Link className="card_comic" to={{ pathname: `/quadrinho/detalhes/${comic.id}` }}>
                                <div className="card_comic_item">
                                    <div className="content_img">
                                        <img className="card_comic_item_img" src={comic.thumbnail.path + "." + comic.thumbnail.extension}></img>
                                    </div>
                                    <h2 className="card_comic_item_title">{comic.title}</h2>
                                </div>
                            </Link>
                        </React.Fragment>
                    )
                this.setState({ pageCount: Math.ceil(data.length / this.state.perPage), postData })
            }).catch((erro) => {
                console.log("Erro ao buscar dados!");
                this.setState({ postData: "Erro a buscar informações, tente novamente mais tarde!" })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
        this.setState({ currentPage: selectedPage, offset: offset }, () => {
            this.receivedData()
        });
    };

    render() {
        return (
            <div className="home">
                <div className="header">
                    <img className="logoMarvel" src={logoMarvel} title="logo da Marvel" alt="logo da Marvel" />
                </div>

                <Form_pesquisa />

                <div id="container_comics">
                    {this.state.postData}
                </div >

                <div className="footer">
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        pageCount={this.state.pageCount}
                        pageRangeDisplayed={this.state.pageCount}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                    />
                </div>
            </div >
        )
    }
}

export default Page_home;