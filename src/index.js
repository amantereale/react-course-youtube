import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDUWDKy6CjY0clDj-GsSoIXZQ_0q53WyjY';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({
            key: API_KEY,
            term: 'puppies'
        }, (videos) => {
            this.setState({videos: videos, selectedVideo: videos[0]});
        });
    }

    setSelectedVideo(selectedVideo) {
        this.setState({
            selectedVideo
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo => this.setSelectedVideo(selectedVideo)} videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.querySelector('.container'));
