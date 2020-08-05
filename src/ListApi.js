import React, { createElement, Component } from "react";
import api from "./Api";
import md5 from "md5";

const baseUrl = "https://gateway.marvel.com/v1/public/";

const timeInMs = new Date().getTime();
const privateKey = "8d2a7ca5d3ea634c5276a2e1cef0575374c1f5da";
const publicKey = "c3c8876fa5fa3d1baa02d617d24157c2";
const md5Final = md5(timeInMs + privateKey + publicKey);

const listComics = baseUrl + "comics?ts=" + timeInMs + "&apikey=" + publicKey + "&hash=" + md5Final;

class ListApi extends Component {
    state = {
        comics: []
    }
    async componentDidMount() {
        const response = await api.get(listComics);
        console.log(response.data.data.results);
        this.setState({ comics: response.data.data.results })
    }
    render() {
        const { comics } = this.state;
        return (
            <div id="container_comics" >
                {comics.map(comic => (
                    <div className="item_comic" key={comic.id}>
                        <img src={comic.thumbnail.path + "." + comic.thumbnail.extension} />
                        <h2 className="name_comic">{comic.title}</h2>
                    </div>
                ))}
            </div >
        )
    }
}

export default ListApi;