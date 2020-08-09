import React, { Component } from "react";
import Api from "../services/Api";
import KeyMarvel from "../services/KeyMarvel";
import "./scss/View_quadrinho.scss";
import { Link } from "react-router-dom";
// const back_page = require("../dist/img/back_page.svg");


class Page_home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        this.receivedData();
    }
    receivedData() {

        const idQuadrinho = this.props.match.params.id;
        const pesquisaQuadrinhaId = `comics/${idQuadrinho}?${KeyMarvel}`;

        Api.get(pesquisaQuadrinhaId)
            .then(res => {
                // IMG
                const dataImg = res.data.data.results;
                console.log(dataImg);
                const ImgComic =
                    dataImg.map(comic =>
                        <React.Fragment>
                            <img src={comic.thumbnail.path + "." + comic.thumbnail.extension}></img>
                            <div className="overlay" style={{ backgroundImage: 'url(' + comic.thumbnail.path + "." + comic.thumbnail.extension + ')' }} />
                        </React.Fragment >
                    )
                this.setState({ ImgComic })

                // TITLE
                const dataTitle = res.data.data.results;
                const titleComic =
                    dataTitle.map(comic =>
                        <React.Fragment>
                            <h1 className="comic_title">{comic.title}</h1>
                        </React.Fragment >
                    )
                this.setState({ titleComic })

                // CREATORS
                // for (var item of data) {
                //     this.setState({ name: item.name })
                // }

                const data = res.data.data.results[0].creators.items;
                // console.log("creatros", data);
                const creatorsComic =
                    data.map(comic =>
                        <React.Fragment>
                            <h5 className="comic_title">{comic.name}</h5>
                        </React.Fragment >
                    )
                this.setState({ creatorsComic })




                //Characters
                const data_characters = res.data.data.results[0].characters.items;
                // console.log("characters", data_characters);
                const charactersComic =
                    data_characters.map(comic =>
                        <React.Fragment>
                            <h5 className="comic_title">{comic.name}</h5>
                        </React.Fragment >
                    )
                this.setState({ charactersComic })

                //Stories
                const data_stories = res.data.data.results[0].stories.items;
                console.log("characters", data_stories);
                const storiesComic =
                    data_stories.map(comic =>
                        <React.Fragment>
                            <h5 className="comic_title">{comic.name}</h5>
                        </React.Fragment >
                    )
                this.setState({ storiesComic })


            });
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
                            {this.state.ImgComic}
                        </div>
                        <div className="comic_description">
                            <div className="header">
                                <div className="comic_description_title">{this.state.titleComic}</div>
                            </div>

                            <div className="comic_description box_itens">
                                <h3 className="comic_description_title">Creators</h3>
                                <div className="comic_description_item">
                                    <div className="comic_description_item_name">
                                        {this.state.creatorsComic}
                                    </div>
                                </div>
                            </div>

                            <div className="comic_description box_itens">
                                <h3 className="comic_description_title">Characters</h3>
                                <div className="comic_description_item">
                                    <div className="comic_description_item_name">
                                        {this.state.charactersComic}
                                    </div>
                                </div>
                            </div>

                            <div className="comic_description box_itens">
                                <h3 className="comic_description_title">Stories</h3>
                                <div className="comic_description_item">
                                    <div className="comic_description_item_name">
                                        {this.state.storiesComic}
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

export default Page_home;