import React, { Component } from "react";
import api from "../services/Api";
import ReactPaginate from 'react-paginate';
import md5 from "md5";

const timeInMs = new Date().getTime();
const privateKey = "8d2a7ca5d3ea634c5276a2e1cef0575374c1f5da";
const publicKey = "c3c8876fa5fa3d1baa02d617d24157c2";
const md5Final = md5(timeInMs + privateKey + publicKey);
const endUrl = `&ts=${timeInMs}&apikey=${publicKey}&hash=${md5Final}`;

class ListApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comics: [],
            data: [],

            offset: 0,
            perPage: 10,
            currentPage: 0,


            value: '',
            nome: "",
            descricao: "",
            img: "",
            autores: "",
        }
        this.handleOpenComic = this.handleOpenComic.bind(this);
        this.handleChaptersChange = this.handleChaptersChange.bind(this);
        this.handleChaptersSubmit = this.handleChaptersSubmit.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    componentDidMount() {
        this.receivedData()
    }

    receivedData() {
        const listComics = `comics?limit=50${endUrl}`;
        api.get(listComics)
            .then(res => {
                const data = res.data.data.results;
                this.setState({ comics: data });

                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);

                const postData =
                    slice.map(comic =>
                        <React.Fragment>
                            <div className="card_comic" key={comic.id} onClick={() => this.handleOpenComic(comic.id)}>
                                <div className="card_comic_item">
                                    <div className="card_comic_item_img" style={{ backgroundImage: 'url(' + comic.thumbnail.path + "." + comic.thumbnail.extension + ')' }} />
                                    <h2 className="card_comic_item_title">{comic.title}</h2>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                this.setState({ pageCount: Math.ceil(data.length / this.state.perPage), postData })
            });
    }

    handleChaptersChange(event) {
        this.setState({ value: event.target.value });
    }
    handleChaptersSubmit(event) {
        event.preventDefault();
        const urlChapters = `characters?name=${this.state.value}${endUrl}`;
        api.get(urlChapters)
    }

    handleOpenComic = (id) => {
        const comics = this.state.comics;

        const result = comics.filter(function (element) {
            // console.log(element.id);
            if (element.id === id) {
                // console.log(element);
                return element
            } else {
                return false;
            }
        });

        const viewClick = result[0];
        console.log(viewClick);
        this.setState({ nome: viewClick.title });
        this.setState({ img: viewClick.thumbnail.path + "." + viewClick.thumbnail.extension });
        // this.setState({ autores: viewClick.creators.items[0].name });
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
            <div>
                <form onSubmit={this.handleChaptersSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChaptersChange} />
                    <input type="submit" value="Submit" />
                </form>

                <div className="painelClick d-none">
                    <p>Nome : {this.state.nome}</p>
                    <p>Descricao : {this.state.descricao}</p>
                    <img src={this.state.img}></img>
                    <p>Autores : {this.state.autores}</p>
                </div>

                <div id="container_comics">
                    {this.state.postData}
                </div >

                <div className="footer">
                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
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

export default ListApi;