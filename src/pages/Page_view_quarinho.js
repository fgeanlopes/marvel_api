import React, { Component } from "react";
import Api from "../services/Api";
import KeyMarvel from "../services/KeyMarvel";

class Page_view_quarinho extends Component {
    constructor(props) {
        super(props)
        this.state = {
            objQuadrinho: [],
        }
        this.handleOpenComic = this.handleOpenComic.bind(this);
    }
    componentDidMount() {
        this.handleOpenComic();
    }

    handleOpenComic() {
        const idQuadrinho = this.props.match.params.id;

        const pesquisaQuadrinhaId = `comics/${idQuadrinho}?${KeyMarvel}`;
        Api.get(pesquisaQuadrinhaId)
            .then(res => {
                const data = res.data.data.results[0];
                console.log(data)
                this.setState({ objQuadrinho: data })
            });
    }

    render() {
        const objQuadrinho = this.state.objQuadrinho;
        return (
            <div>
                <div className="item">
                    <div className="thumbnail">
                        {/* <div className="content_description">
                            <img src={objQuadrinho.thumbnail.path + "." + objQuadrinho.thumbnail.extension} />
                        </div> */}
                    </div>
                    <div className="content">
                        <h1 className="content_title">{objQuadrinho.title}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page_view_quarinho;