import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../Apis/youtube'
import VideoList from './videoList'
import VideoDetail from './videoDetail'
import './search.css'

class App extends React.Component{

    state = { videos: [], selectedVideo: null }
    componentDidMount() {
        this.onTermSubmit('buildings')
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            } 
        })
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
        
    }
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video})
    }

    render() {
        return (
            <div className='searchbar ui container-fluid'>
                <SearchBar onFormSubmit= {this.onTermSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList videos= {this.state.videos} onVideoSelect= {this.onVideoSelect} />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
    
}

export default App