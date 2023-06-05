import {initialList} from "./App";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import GalleryApi from "./GalleryAPI/GalleryAPI";

export default function Photos() {
    const navigate = useNavigate();
    let { userId, albumId } = useParams();
    const [photosList, setPhotosList] = useState(initialList)

    useEffect(() => {
        GalleryApi.getListOfPhotos(albumId).then((newList) => {
            setPhotosList([...newList])
        })
    }, [])

    return(
        <div>
            <nav>
                <button onClick={() => {navigate('/')}}>Back to users</button>
                <button onClick={() => {if(userId !== ''){navigate(`/${userId}/albums/`)}}}>Back to albums</button>
            </nav>
            <h1>Photos</h1>
            {
                photosList.map(photo => (
                    <img
                        key={photo.id}
                        src={photo.url}
                        alt={photo.title}
                    />
                ))
            }
        </div>
    )
}