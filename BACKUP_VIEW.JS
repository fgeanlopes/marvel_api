if (idQuadrinho.path === "/quadrinho/detalhes/:id") {

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
            const data = res.data.data.results[0].creators.items;
            const creatorsComic =
                data.map(comic =>
                    <React.Fragment>
                        <h5 className="comic_title">{comic.name}</h5>
                    </React.Fragment >
                )
            this.setState({ creatorsComic })
            //Characters
            const data_characters = res.data.data.results[0].characters.items;
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

} else {
    const pesquisaQuadrinhaId = `characters/${idQuadrinho}?${KeyMarvel}`;
    Api.get(pesquisaQuadrinhaId)
        .then(res => {
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