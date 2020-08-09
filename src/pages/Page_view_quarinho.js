import React, { Component } from "react";
import Api from "../services/Api";
import KeyMarvel from "../services/KeyMarvel";

import "./scss/View_quadrinho.scss";

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
                // for (var item of data_creators) {
                //     this.setState({ name_creators: item.name })
                // }

                const data_creators = res.data.data.results[0].creators.items;
                console.log("creatros", data_creators);
                const creatorsComic =
                    data_creators.map(comic =>
                        <React.Fragment>
                            <h1 className="comic_title">{comic.name}</h1>
                        </React.Fragment >
                    )
                this.setState({ creatorsComic })
            });
    }
    render() {
        console.log("state creators", this.state.creatorsComic);
        return (
            <div>
                <div id="container_comics">
                    <div className="comic">
                        <div className="comic_img">
                            {this.state.ImgComic}
                        </div>
                        <div className="comic_description">
                            <div className="header">
                                <div className="comic_description_title">{this.state.titleComic}</div>
                            </div>
                            <div className="comic_description_creators">
                                <h3 className="comic_description_creators_title">Creators</h3>
                            </div>
                            <div className="comic_description_creators_title_item">
                                <div className="comic_description_creators_title_item_name">
                                    {this.state.creatorsComic}
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