const url = 'http://10.0.129.35:3000/music/today'

function* getMovie(){
    const reponse = yield fetch(url, {
        method: 'GET',
        headers:{
            Accept:'application/json',
            'content-Type': 'application/json'
        }, 
        body: ''
    })
    const movies = yield reponse.status === 200 ? JSON.parse(reponse): []
    return movies;
}

export const Api = {
    getMovie
}