import React, { Component } from "react";
import Api from "../services/Api";
import KeyMarvel from "../services/KeyMarvel";
import { Link } from "react-router-dom";

import "./scss/Page_character.scss"
const logoMarvel = require("../dist/img/MarvelLogo.svg");

class Page_character extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        this.receivedData();
    }

    receivedData() {
        const idCharacters = this.props.match.params.id;
        const checker = this.props.match;
        if (checker.path === "/character/search/:id") {
            const urlCharacter = `characters?${KeyMarvel}&nameStartsWith=${idCharacters}&orderBy=name&limit=15&offset=0`;
            Api.get(urlCharacter)
                .then(res => {
                    const data = res.data.data.results;
                    const data_character =
                        data.map(comic =>
                            <React.Fragment key={comic.id}>
                                <div className="card_comic" key={comic.id}>
                                    <Link key={comic.id} to={{ pathname: `/character/details/${comic.id}` }}>
                                        <div className="card_comic_item">
                                            <div className="content_img">
                                                <img className="card_comic_item_img" src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt={comic.name}></img>
                                            </div>
                                            <h2 className="card_comic_item_title">{comic.name}</h2>
                                        </div>
                                    </Link>
                                </div>
                            </React.Fragment>
                        )
                    this.setState({ data_character })
                }).catch((erro) => {
                    console.log("Erro ao buscar dados!");
                    this.setState({ postData: "Erro a buscar informações, tente novamente mais tarde!" })
                });
        }
        else {
            const urlCharacter = `characters?${KeyMarvel}&orderBy=name&limit=16&offset=322`;
            Api.get(urlCharacter)
                .then(res => {
                    const data = res.data.data.results;
                    const data_character =
                        data.map(comic =>
                            <React.Fragment key={comic.id}>
                                <div className="card_comic" key={comic.id}>
                                    <Link key={comic.id} to={{ pathname: `/character/details/${comic.id}` }}>
                                        <div className="card_comic_item">
                                            <div className="content_img">
                                                <img className="card_comic_item_img" src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt={comic.name}></img>
                                            </div>
                                            <h2 className="card_comic_item_title">{comic.name}</h2>
                                        </div>
                                    </Link>
                                </div>
                            </React.Fragment>
                        )
                    this.setState({ data_character })
                }).catch((erro) => {
                    console.log("Erro ao buscar dados!");
                    this.setState({ postData: "Erro a buscar informações, tente novamente mais tarde!" })
                });
        }
    }
    render() {
        const icon_back_page = <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="10" />
            <path d="M30.8882 35.3972L21.1525 25.6412C20.7862 25.275 20.7862 24.6791 21.1532 24.3122L30.8882 14.5569C31.2546 14.1897 31.254 13.5949 30.8868 13.2285C30.5196 12.8621 29.9249 12.8627 29.5584 13.2299L19.8241 22.9845C18.7254 24.0832 18.7254 25.8709 19.8234 26.9689L29.5584 36.7242C29.7419 36.908 29.9826 37 30.2233 37C30.4634 37 30.7035 36.9085 30.8868 36.7255C31.254 36.3591 31.2546 35.7644 30.8882 35.3972Z" fill="white" />
        </svg>
        return (
            <div className="character">
                <div id="container_comics">
                    <img className="logoMarvel" src={logoMarvel} title="logo da Marvel" alt="logo da Marvel" />

                    <Link to="/">
                        <div className="icon_back_page">
                            {icon_back_page}
                        </div>
                    </Link>

                    {this.state.data_character}
                </div >
            </div>
        )
    }
}

export default Page_character;