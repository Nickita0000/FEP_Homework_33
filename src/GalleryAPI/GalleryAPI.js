export default class GalleryApi {
    static API =  'https://jsonplaceholder.typicode.com/'

    static request(url = '', method = 'GET', body){
        return fetch(GalleryApi.API + url, {
            method: method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res) => {
            if(res.ok) {
                return res.json()
            }
            throw new Error('Can not execute server request.')
        })
    }

    static getListOfUsers() {
        return GalleryApi.request('users/').catch(() => {
            throw new Error('Can not retrieve users list from server.')
        })
    }

    static getListOfAlbums(id) {
        return GalleryApi.request('albums?userId=' + id).catch(() => {
            throw new Error('Can not retrieve albums list from server.')
        })
    }

    static getListOfPhotos(id) {
        return GalleryApi.request('photos?albumId=' + id).catch(() => {
            throw new Error('Can not retrieve photos from server.')
        })
    }
}