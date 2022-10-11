import axios from 'axios'

const KEY = 'AIzaSyA_dpAMAuN5Tu13xsKk1RK97lWJ_Y8QgZ4'

export default axios.create({
    baseURL:   'https://youtube.googleapis.com/youtube/v3' ,
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY

    }
})
