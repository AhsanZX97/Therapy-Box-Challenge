import React, { Component } from 'react'

class News extends Component {
    constructor(props) {
        super(props)

        this.state = {
            headline: undefined,
            body: undefined,
            image: undefined
        }
    }

    FetchDataFromRssFeed() {
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

        let Parser = require('rss-parser');
        let parser = new Parser();
        parser.parseURL(CORS_PROXY + 'http://feeds.bbci.co.uk/news/rss.xml', function (err, feed) {
            if (err) throw err;
            console.log(feed.items[0].contentSnippet);
            this.setState({
                headline: feed.items[0].title,
                body: feed.items[0].contentSnippet
            })
            /*feed.items.forEach(function (entry) {
                console.log(entry.title + ':' + entry.link);
            })*/
        })

    }

    componentDidMount() {
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

        let Parser = require('rss-parser');
        let parser = new Parser();
        parser.parseURL(CORS_PROXY + 'http://feeds.bbci.co.uk/news/rss.xml').then((feed) =>{
            this.setState({
                headline: feed.items[0].title,
                body: feed.items[0].contentSnippet
            })
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.headline}</p>
                <p>{this.state.body}</p>
            </div>
        )
    }

}

export default News