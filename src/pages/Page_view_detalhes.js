import React, { Component } from "react";
import Api from "../services/Api";
import KeyMarvel from "../services/KeyMarvel";
import { Link } from "react-router-dom";

import "./scss/Page_view_detalhes.scss";

class Page_view_detalhes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series_status: false,
            description_status: false,
            comics_status: false,
            events_status: false,

            characters_status: false,
            creators_status: false,
        }
    }
    componentDidMount() {
        this.receivedData();
    }
    receivedData() {

        const idEntrada = this.props.match.params.id;
        const verificador = this.props.match;

        if (verificador.path === "/quadrinho/detalhes/:id") {
            const pesquisaQuadrinho = `comics/${idEntrada}?${KeyMarvel}`;

            // Campos a serem exibidos
            const status = true;
            this.setState({
                characters_status: status,
                creators_status: status
            })

            Api.get(pesquisaQuadrinho)
                .then(res => {

                    // THUMBNAIL
                    const dataImg = res.data.data.results;
                    const thumbnail =
                        dataImg.map(comic =>
                            <React.Fragment>
                                <img src={comic.thumbnail.path + "." + comic.thumbnail.extension}></img>
                                <div className="overlay" style={{ backgroundImage: 'url(' + comic.thumbnail.path + "." + comic.thumbnail.extension + ')' }} />
                            </React.Fragment >
                        )
                    this.setState({ thumbnail })


                    // TITLE
                    const dataTitle = res.data.data.results;
                    const title =
                        dataTitle.map(comic =>
                            <React.Fragment>
                                <h1 className="comic_title">{comic.title}</h1>
                            </React.Fragment >
                        )
                    this.setState({ title })



                    // CREATORS
                    const dataCreators = res.data.data.results[0].creators.items;
                    const creators =
                        dataCreators.map(comic =>
                            <React.Fragment>
                                <h5 className="comic_title">{comic.name}</h5>
                            </React.Fragment >
                        )
                    this.setState({ creators })


                    //CHARACTERS
                    const dataCharacters = res.data.data.results[0].characters.items;
                    const characters =
                        dataCharacters.map(comic =>
                            <React.Fragment>
                                <h5 className="comic_title">{comic.name}</h5>
                            </React.Fragment >
                        )
                    this.setState({ characters })


                    //Stories
                    const dataStories = res.data.data.results[0].stories.items;
                    const stories =
                        dataStories.map(comic =>
                            <React.Fragment>
                                <h5 className="comic_title">{comic.name}</h5>
                            </React.Fragment >
                        )
                    this.setState({ stories })
                }).catch((erro) => {
                    console.log("Erro ao buscar dados!");
                    this.setState({ title: "Erro a buscar informações, tente novamente mais tarde!" })
                });
        }
        else {
            const pesquisaPersonagem = `characters/${idEntrada}?${KeyMarvel}`;
            // Campos a serem exibidos
            const status = true;
            this.setState({
                series_status: status,
                description_status: status,
                comics_status: status,
                events_status: status,
            })

            Api.get(pesquisaPersonagem)
                .then(res => {
                    const data = res.data.data.results;
                    const thumbnail =
                        data.map(comic =>
                            <React.Fragment>
                                <img src={comic.thumbnail.path + "." + comic.thumbnail.extension}></img>
                                <div className="overlay" style={{ backgroundImage: 'url(' + comic.thumbnail.path + "." + comic.thumbnail.extension + ')' }} />
                            </React.Fragment >
                        )
                    this.setState({ thumbnail })
                    // TITLE

                    const title =
                        data.map(comic =>
                            <React.Fragment>
                                <h1 className="comic_title">{comic.name}</h1>
                            </React.Fragment >
                        )
                    this.setState({ title })


                    //Stories
                    const data_stories = res.data.data.results[0].stories.items;
                    const stories =
                        data_stories.map(comic =>
                            <React.Fragment>
                                <h5 className="comic_title">{comic.name}</h5>
                            </React.Fragment >
                        )
                    this.setState({ stories })

                    //Description
                    const dataDescription = res.data.data.results;
                    const description =
                        dataDescription.map(comic =>
                            <React.Fragment>
                                <h5 className="comic_title">{comic.description}</h5>
                            </React.Fragment >
                        )
                    this.setState({ description })


                    //Comics
                    const dataComics = res.data.data.results[0].comics.items;
                    const comics =
                        dataComics.map(comic =>
                            <React.Fragment>
                                <h5 className="comic_title">{comic.name}</h5>
                            </React.Fragment >
                        )
                    this.setState({ comics })


                    //Events
                    const dataEvents = res.data.data.results[0].events.items;
                    const events =
                        dataEvents.map(comic =>
                            <React.Fragment>
                                <h5 className="comic_title">{comic.name}</h5>
                            </React.Fragment >
                        )
                    this.setState({ events })


                    //Series
                    const dataSeries = res.data.data.results[0].series.items;
                    const series =
                        dataSeries.map(comic =>
                            <React.Fragment>
                                <h5 className="comic_title">{comic.name}</h5>
                            </React.Fragment >
                        )
                    this.setState({ series })

                }).catch((erro) => {
                    console.log("Erro ao buscar dados!");
                    this.setState({ title: "Erro a buscar informações, tente novamente mais tarde!" })
                });
        }
    }
    render() {
        const icon_back_page = <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="10" />
            <path d="M30.8882 35.3972L21.1525 25.6412C20.7862 25.275 20.7862 24.6791 21.1532 24.3122L30.8882 14.5569C31.2546 14.1897 31.254 13.5949 30.8868 13.2285C30.5196 12.8621 29.9249 12.8627 29.5584 13.2299L19.8241 22.9845C18.7254 24.0832 18.7254 25.8709 19.8234 26.9689L29.5584 36.7242C29.7419 36.908 29.9826 37 30.2233 37C30.4634 37 30.7035 36.9085 30.8868 36.7255C31.254 36.3591 31.2546 35.7644 30.8882 35.3972Z" fill="white" />
        </svg>
        return (
            <div>
                <div id="container_comics">
                    <div className="comic">
                        <Link to="/">
                            <div className="icon_back_page">
                                {icon_back_page}
                            </div>
                        </Link>
                        <div className="comic_img">
                            {this.state.thumbnail}
                        </div>
                        <div className="comic_description">
                            <div className="header">
                                <div className="comic_description_title">{this.state.title}</div>
                            </div>

                            <div className={`comic_description box_itens ${this.state.creators_status ? "on" : "off"}`}>
                                <h3 className="comic_description_title">Creators</h3>
                                <div className="comic_description_item">
                                    <div className="comic_description_item_name">
                                        {this.state.creators}
                                    </div>
                                </div>
                            </div>

                            <div className={`comic_description box_itens ${this.state.characters_status ? "on" : "off"}`}>
                                <h3 className="comic_description_title">Characters</h3>
                                <div className="comic_description_item">
                                    <div className="comic_description_item_name">
                                        {this.state.characters}
                                    </div>
                                </div>
                            </div>

                            <div className={`comic_description box_itens ${this.state.description_status ? "on" : "off"}`}>
                                <h3 className="comic_description_title">Description</h3>
                                <div className="comic_description_item">
                                    <div className="comic_description_item_name">
                                        {this.state.description}
                                    </div>
                                </div>
                            </div>

                            <div className={`comic_description box_itens ${this.state.comics_status ? "on" : "off"}`}>
                                <h3 className="comic_description_title">Comics</h3>
                                <div className="comic_description_item">
                                    <div className="comic_description_item_name">
                                        {this.state.comics}
                                    </div>
                                </div>
                            </div>

                            <div className={`comic_description box_itens ${this.state.events_status ? "on" : "off"}`}>
                                <h3 className="comic_description_title">Events</h3>
                                <div className="comic_description_item">
                                    <div className="comic_description_item_name">
                                        {this.state.events}
                                    </div>
                                </div>
                            </div>

                            <div className={`comic_description box_itens ${this.state.series_status ? "on" : "off"}`}>
                                <h3 className="comic_description_title">Series</h3>
                                <div className="comic_description_item">
                                    <div className="comic_description_item_name">
                                        {this.state.series}
                                    </div>
                                </div>
                            </div>


                            <div className="comic_description box_itens">
                                <h3 className="comic_description_title">Stories</h3>
                                <div className="comic_description_item">
                                    <div className="comic_description_item_name">
                                        {this.state.stories}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

export default Page_view_detalhes;