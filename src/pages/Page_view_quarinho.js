import React, { Component } from "react";
import Api from "../services/Api";
import KeyMarvel from "../services/KeyMarvel";

import "./scss/View_quadrinho.scss";

class Page_home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: [],
            name: "Gean",
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
                const data = res.data.data.results;
                // console.log(data);


                const postData =
                    data.map(comic =>
                        <React.Fragment>
                            <div className="comic">
                                <div className="comic_img">
                                    <img src={comic.thumbnail.path + "." + comic.thumbnail.extension}></img>
                                    <div className="overlay" style={{ backgroundImage: 'url(' + comic.thumbnail.path + "." + comic.thumbnail.extension + ')' }} />
                                </div>
                                <div className="comic_description">
                                    <div className="header">
                                        <h2 className="card_comic_item_title">{comic.title}</h2>
                                    </div>
                                    <div className="item-info">
                                        {/* <p className="item">{comic}</p> */}
                                    </div>
                                </div>
                            </div>
                        </React.Fragment >
                    )
                this.setState({ postData })

                const data_ = res.data.data.results[0].creators.items;
                // this.setState({ data_ })

                for (var item of data_) {
                    // console.log(item.name);
                    this.setState({ name: item.name })
                }


            });
    }
    render() {
        return (
            <div>
                <div id="container_comics">
                    {this.state.postData}
                    <p>
                        {this.state.name}
                    </p>
                </div >
            </div >
        )
    }
}

export default Page_home;