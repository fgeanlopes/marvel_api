import React, { Component } from "react";
import Api from "../services/Api";
import ReactPaginate from 'react-paginate';
import KeyMarvel from "../services/KeyMarvel";
import { Link } from "react-router-dom";
class Page_home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comics: [],
            data: [],
            nome: "",
            offset: 0,
            perPage: 10,
            currentPage: 0,
        }
        this.handlePageClick = this.handlePageClick.bind(this);
        console.log(this.state.nome);
    }
    componentDidMount() {
        this.receivedData();
        this.setState({ nome: "Gean" });
    }
    receivedData() {
        const urlGetQuadrinho = `comics?limit=100${KeyMarvel}`;
        Api.get(urlGetQuadrinho)
            .then(res => {
                const data = res.data.data.results;
                this.setState({ comics: data });
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
                const postData =
                    slice.map(comic =>
                        <React.Fragment>
                            <Link to={{ pathname: `/quadrinho/${comic.id}` }}>
                                <div className="card_comic" key={comic.id}>
                                    <div className="card_comic_item">
                                        <div className="card_comic_item_img" style={{ backgroundImage: 'url(' + comic.thumbnail.path + "." + comic.thumbnail.extension + ')' }} />
                                        <h2 className="card_comic_item_title">{comic.title}</h2>
                                    </div>
                                </div>
                            </Link>
                        </React.Fragment>
                    )
                this.setState({ pageCount: Math.ceil(data.length / this.state.perPage), postData })
                console.log(this.state.postData);
                console.log(this.state.nome);
            });
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

export default Page_home;