import React, { Component } from "react";
import api from "./Api";
import md5 from "md5";

const baseUrl = "https://gateway.marvel.com/v1/public/";

const timeInMs = new Date().getTime();
const privateKey = "8d2a7ca5d3ea634c5276a2e1cef0575374c1f5da";
const publicKey = "c3c8876fa5fa3d1baa02d617d24157c2";
const md5Final = md5(timeInMs + privateKey + publicKey);

const listComics = baseUrl + "comics?limit=100&ts=" + timeInMs + "&apikey=" + publicKey + "&hash=" + md5Final;


















class ListApi extends Component {
    constructor(props) {
        super(props);

        this.openComic = this.openComic.bind(this);
        this.state = {
            comics: [],
            nome: "",
            descricao: "",
            img: "",
            autores: "",
        }
    }

    async componentDidMount() {
        const response = await api.get(listComics);
        // console.log(response.data.data.results);
        this.setState({ comics: response.data.data.results })
    }

    openComic = (id) => {
        const { comics } = this.state;

        const result = comics.filter(function (element) {
            // console.log(element.id);
            if (element.id == id) {
                console.log(element);
                return element
            } else {
                return false;
            }
        });

        const viewClick = result[0];

        this.setState({ nome: viewClick.title });
        this.setState({ img: viewClick.thumbnail.path + "." + viewClick.thumbnail.extension });
        // this.setState({ autores: viewClick.creators.items[0].name });
    }


    render() {
        const { comics } = this.state;
        return (
            <div>
                <div className="painel">
                    <p>Nome : {this.state.nome}</p>
                    <p>Descricao : {this.state.descricao}</p>
                    <img src={this.state.img}></img>
                    <p>Autores : {this.state.autores}</p>
                </div>

                <div id="container_comics">
                    {comics.map(comic => (
                        <div className="card_comic" key={comic.id} onClick={() => this.openComic(comic.id)}>
                            <div className="card_comic_item">
                                <div className="card_comic_item_img" style={{ backgroundImage: 'url(' + comic.thumbnail.path + "." + comic.thumbnail.extension + ')' }} />
                                <h2 className="card_comic_item_title">{comic.title}</h2>
                            </div>
                        </div>
                    ))}
                </div >
            </div >
        )
    }
}

export default ListApi;