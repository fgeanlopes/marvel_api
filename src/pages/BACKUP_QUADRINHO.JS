import React, { Component } from "react";
import Api from "../services/Api";
import KeyMarvel from "../services/KeyMarvel";

class Page_view_quarinho extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comics: [],
            postData: [],
            nome: "Nome 1",
        }
        // this.handleOpenComic = this.handleOpenComic.bind(this);
    }

    componentDidMount() {
        // this.handleOpenComic();

        // const idQuadrinho = this.props.match.params.id;
        // const pesquisaQuadrinhaId = `comics/${idQuadrinho}?${KeyMarvel}`;
        // Api.get(pesquisaQuadrinhaId)
        //     .then(res => {
        //         const data = res.data.data.results;
        //         const postData =
        //             <>
        //                 <div className="card_comic" key={data.id}>
        //                     <div className="card_comic_item">
        //                         {/* <div className="card_comic_item_img" style={{ backgroundImage: 'url(' + data.thumbnail.path + "." + data.thumbnail.extension + ')' }} /> */}
        //                         <h2 className="card_comic_item_title">{data.title}</h2>
        //                     </div>
        //                 </div>
        //             </>
        //         this.setState({ postData: postData })
        //     });


        // console.log("Nome INICIAL", this.state.nome);
        console.log("NOME", this.state.nome);

        this.setState({ nome: "Nome 2" })
        console.log("NOME ATUALIZADO", this.state.nome);
    }

    // handleOpenComic() {
    //     const idQuadrinho = this.props.match.params.id;
    //     const pesquisaQuadrinhaId = `comics/${idQuadrinho}?${KeyMarvel}`;
    //     Api.get(pesquisaQuadrinhaId)
    //         .then(res => {
    //             const data = res.data.data.results;
    //             const postData =
    //                 <>
    //                     <div className="card_comic" key={data.id}>
    //                         <div className="card_comic_item">
    //                             {/* <div className="card_comic_item_img" style={{ backgroundImage: 'url(' + data.thumbnail.path + "." + data.thumbnail.extension + ')' }} /> */}
    //                             <h2 className="card_comic_item_title">{data.title}</h2>
    //                         </div>
    //                     </div>
    //                 </>
    //             this.setState({ postData: postData })
    //         });
    // }

    render() {
        const idQuadrinho = this.props.match.params.id;
        const pesquisaQuadrinhaId = `comics/${idQuadrinho}?${KeyMarvel}`;
        // Api.get(pesquisaQuadrinhaId)
        //     .then(res => {
        //         const data = res.data.data.results;
        //         this.setState({ comics: data });
        //     })
        const data = this.state.comics
        return (
            <div>
                <div className="card_comic" key={data.id}>
                    <div className="card_comic_item">
                        {/* //                             <div className="card_comic_item_img" style={{ backgroundImage: 'url(' + data.thumbnail.path + "." + data.thumbnail.extension + ')' }} /> */}
                        <h2 className="card_comic_item_title">{data.title}</h2>
                    </div>
                </div>
            </div>
        )
    }

}

export default Page_view_quarinho;