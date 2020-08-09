import React, { Component } from "react";
import Api from "../services/Api";
import KeyMarvel from "../services/KeyMarvel";
class Page_view_personagem_all extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postDataPersonsagem: [],
            postDataComics: [],
        }
    }
    componentDidMount() {
        this.receivedData();
    }
    // componentDidUpdate() {
    //     this.receivedData();
    // }

    receivedData() {
        const idPesquisa = this.props.match.params.id;
        const urlPersonagem = `characters?name=${idPesquisa}${KeyMarvel}`;
        console.log(urlPersonagem);

        Api.get(urlPersonagem)
            .then(res => {
                const data = res.data.data.results;

                const postDataPersonsagem =
                    data.map(comic =>
                        <React.Fragment>
                            <div className="card_comic" key={comic.id}>
                                <div className="card_comic_item">
                                    <img src={comic.thumbnail.path + "." + comic.thumbnail.extension}></img>
                                    <h2 className="card_comic_item_title">{comic.title}</h2>
                                    <p className="card_comic_item_title">{comic.description}</p>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                this.setState({ postDataPersonsagem })


                // const dataComic = data[0].comics.items;
                // // console.log(dataComic);
                // const postDataComics =
                //     dataComic.map(comic =>
                //         <React.Fragment>
                //             <div className="card_comic" key={comic.id}>
                //                 <div className="card_comic_item">
                //                     {/* <img src={comic.thumbnail.path + "." + comic.thumbnail.extension}></img> */}
                //                     <h2 className="card_comic_item_title">{comic.name}</h2>
                //                     <p className="card_comic_item_title">{comic.description}</p>
                //                 </div>
                //             </div>
                //         </React.Fragment>
                //     )
                // this.setState({ postDataComics })
                // console.log(postDataComics);
            });
    }

    render() {
        return (
            <div>
                <div id="container_comics">
                    {this.state.postDataPersonsagem}
                    {/* <div className="comics">
                        {this.state.postDataComics}
                    </div> */}
                    <p>Pesosagem</p>
                </div >
            </div >
        )
    }
}

export default Page_view_personagem_all;