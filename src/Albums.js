import {Link, useNavigate, useParams} from "react-router-dom";
import {initialList} from "./App";
import {useEffect, useState} from "react";
import GalleryApi from "./GalleryAPI/GalleryAPI";

export default function Albums( ) {
    const navigate = useNavigate();
    let { userId } = useParams();
    const [albumsList, setAlbumsList] = useState(initialList)

    useEffect(() => {
        GalleryApi.getListOfAlbums(userId).then((newList) => {
            setAlbumsList([...newList])
        })
    }, [])



    return (
        <div>
            <nav>
                <button onClick={() => {navigate('/')}}>Back to users</button>
            </nav>
            <h1>Albums</h1>
            <ul>
                {
                    albumsList.map(album => (
                        <li key={album.id}>
                            <Link to={`/${userId}/albums/${album.id}/photos/`} >
                                {album.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}